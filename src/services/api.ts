import axios, { AxiosError } from 'axios'

import { env } from '@/env'
import { signOut } from '@/contexts/auth/provider'

interface FailedRequestQueue {
  onSuccess: (token: string) => void
  onFailure: (error: AxiosError) => void
}

let isRefreshing = false
let failedRequestsQueue: FailedRequestQueue[] = []

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true,
})

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      if (error.config?.url !== '/token/refresh') {
        const originalConfig = error.config

        if (!isRefreshing) {
          isRefreshing = true

          api
            .patch<{ access_token: string }>('/token/refresh')
            .then((response) => {
              const { access_token: accessToken } = response.data

              api.defaults.headers.common.Authorization = `Bearer ${accessToken}`

              failedRequestsQueue.forEach((request) =>
                request.onSuccess(accessToken),
              )
            })
            .catch((error) => {
              failedRequestsQueue.forEach((request) => request.onFailure(error))
              signOut()
            })
            .finally(() => {
              isRefreshing = false
              failedRequestsQueue = []
            })
        }

        return new Promise((resolve, reject) => {
          failedRequestsQueue.push({
            onSuccess: (token: string) => {
              const originalRequestConfig = {
                ...originalConfig,
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }

              resolve(api(originalRequestConfig))
            },
            onFailure: (error: AxiosError) => {
              reject(error)
            },
          })
        })
      } else {
        signOut()
      }
    }

    return Promise.reject(error)
  },
)
