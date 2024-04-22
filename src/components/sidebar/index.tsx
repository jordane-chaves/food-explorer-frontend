import { MagnifyingGlass, X } from '@phosphor-icons/react'
import { createPortal } from 'react-dom'
import { Link, useNavigate } from 'react-router-dom'

import { useAuth } from '@/hooks/auth'
import { UserRoles } from '@/utils/user-roles.enum'

import { Footer } from '../footer'
import { Input } from '../input'
import { CloseButton, Container, Content, Header, Nav } from './styles'

interface SidebarProps {
  menuIsOpen?: boolean
  handleCloseMenu: () => void
}

export function Sidebar({ menuIsOpen, handleCloseMenu }: SidebarProps) {
  const { user, signOut } = useAuth()

  const navigate = useNavigate()

  async function handleSignOut() {
    if (!signOut) {
      return
    }

    await signOut()
    return navigate('/')
  }

  const userRole = user?.role ?? UserRoles.CUSTOMER

  const canCreateNewDish = [UserRoles.ADMIN].includes(userRole)

  return createPortal(
    <Container data-menu-is-open={menuIsOpen}>
      <Header>
        <CloseButton onClick={handleCloseMenu}>
          <X />
        </CloseButton>

        <h2>Menu</h2>
      </Header>

      <Content>
        <Input.Root>
          <Input.Icon icon={MagnifyingGlass} />
          <Input.Element placeholder="Busque por pratos ou ingredientes" />
        </Input.Root>

        <Nav>
          {canCreateNewDish && <Link to="/dish/new">Novo prato</Link>}
          <a onClick={handleSignOut}>Sair</a>
        </Nav>
      </Content>

      <Footer />
    </Container>,
    document.body,
  )
}
