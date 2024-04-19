import { AxiosError, AxiosResponse } from 'axios'
import { ReactNode, useEffect, useState } from 'react'

import { api } from '@/services/api'

import { AuthContext, User } from '.'

interface AuthProviderProps {
  children: ReactNode
}

interface SignInParams {
  email: string
  password: string
}

interface DataProps {
  accessToken?: string
  user?: User
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<DataProps>({})

  const isAuthenticated = !!data.accessToken

  async function getProfile() {
    try {
      const response = await api.get<{ user: User }>('/profile')
      const { user } = response.data

      setData((prev) => ({ ...prev, user }))
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return alert(error.response.data.message)
      } else {
        return alert('Erro ao fazer login.')
      }
    }
  }

  async function signIn({ email, password }: SignInParams) {
    try {
      const response = await api.post<
        unknown,
        AxiosResponse<{ access_token: string }>,
        { email: string; password: string }
      >('/sessions', { email, password })

      const { access_token: accessToken } = response.data

      api.defaults.headers.common.Authorization = `Bearer ${accessToken}`

      setData((prev) => ({ ...prev, accessToken }))

      await getProfile()
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        return alert(error.response.data.message)
      } else {
        return alert('Erro ao fazer login.')
      }
    }
  }

  async function signOut() {
    await api.post('/logout').finally(() => setData({}))
  }

  useEffect(() => {
    async function refreshToken() {
      try {
        const response = await api.patch<{ access_token: string }>(
          '/token/refresh',
        )

        const { access_token: accessToken } = response.data

        api.defaults.headers.common.Authorization = `Bearer ${accessToken}`

        setData((prev) => ({ ...prev, accessToken }))

        await getProfile()
      } catch {
        await signOut()
      }
    }

    if (!isAuthenticated) {
      refreshToken()
    }
  }, [isAuthenticated])

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user: data.user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}
