import { AxiosError, AxiosResponse } from 'axios'
import { ReactNode, useEffect, useState } from 'react'

import { LoadingScreen } from '@/components/loading-screen'
import { api } from '@/services/api'
import storageConfig from '@/config/storage'

import { AuthContext, User } from '.'

const { ACCESS_TOKEN_KEY } = storageConfig

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

export async function signOut() {
  localStorage.clear()
  await api.post('/logout')

  window.location.href = '/'
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<DataProps>({})
  const [isLoading, setIsLoading] = useState(false)

  const isAuthenticated = !!data.user

  async function getProfile() {
    try {
      setIsLoading(true)

      const response = await api.get<{ user: User }>('/profile')
      const { user } = response.data

      setData((prev) => ({ ...prev, user }))
    } catch (error) {
      await signOut()
    } finally {
      setIsLoading(false)
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
      localStorage.setItem(ACCESS_TOKEN_KEY, accessToken)

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

  useEffect(() => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY)

    if (accessToken) {
      getProfile()
    }
  }, [])

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
