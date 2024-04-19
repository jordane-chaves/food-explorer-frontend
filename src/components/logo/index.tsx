import LogoImg from '@/assets/logo.svg'
import { useAuth } from '@/hooks/auth'
import { UserRoles } from '@/utils/user-roles.enum'

import { Container } from './styles'

export function Logo() {
  const { user } = useAuth()

  const isAdmin = user?.role === UserRoles.ADMIN

  return (
    <Container to="/">
      <img src={LogoImg} alt="Food Explorer" />
      {isAdmin && <span>admin</span>}
    </Container>
  )
}
