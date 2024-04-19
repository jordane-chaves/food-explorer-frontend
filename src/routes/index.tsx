import { BrowserRouter } from 'react-router-dom'

import { useAuth } from '@/hooks/auth'
import { UserRoles } from '@/utils/user-roles.enum'

import { AuthRoutes } from './auth-routes'
import { AdminRoutes } from './admin-routes'
import { CustomerRoutes } from './customer-routes'

export function Routes() {
  const { isAuthenticated, user } = useAuth()

  function AccessRoute() {
    switch (user?.role) {
      case UserRoles.ADMIN:
        return <AdminRoutes />
      case UserRoles.CUSTOMER:
        return <CustomerRoutes />
      default:
        return <CustomerRoutes />
    }
  }

  return (
    <BrowserRouter>
      {isAuthenticated ? <AccessRoute /> : <AuthRoutes />}
    </BrowserRouter>
  )
}
