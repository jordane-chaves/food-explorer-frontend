import { createContext } from 'react'

import { UserRoles } from '@/utils/user-roles.enum'

export interface User {
  id: string
  name: string
  email: string
  role: UserRoles
}

interface AuthContextProps {
  isAuthenticated?: boolean
  user?: User
  signIn?: (request: { email: string; password: string }) => Promise<void>
  signOut?: () => Promise<void>
}

export const AuthContext = createContext<AuthContextProps>({})
