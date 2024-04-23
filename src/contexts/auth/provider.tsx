import { AxiosError, AxiosResponse } from 'axios'
import { ReactNode, useEffect, useState } from 'react'

import { LoadingScreen } from '@/components/loading-screen'
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
  const [isLoading, setIsLoading] = useState(false)

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
      setIsLoading(true)
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
    } finally {
      setIsLoading(false)
    }
  }

  async function signOut() {
    try {
      setIsLoading(true)

      await api.post('/logout')

      setData({})
    } catch (error) {
      alert('Falha ao sair da aplicação')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    async function refreshToken() {
      try {
        setIsLoading(true)
        const response = await api.patch<{ access_token: string }>(
          '/token/refresh',
        )

        const { access_token: accessToken } = response.data

        api.defaults.headers.common.Authorization = `Bearer ${accessToken}`

        setData((prev) => ({ ...prev, accessToken }))

        await getProfile()
      } catch {
        await signOut()
      } finally {
        setIsLoading(false)
      }
    }

    if (!isAuthenticated) {
      refreshToken()
    }
  }, [isAuthenticated])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user: data.user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}
