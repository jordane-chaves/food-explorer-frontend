import logo from '@/assets/logo.svg'

import { LoadingSpinnerBounce } from '../loading-spinner-bounce'
import { Container, LogoWrapper } from './styles'

export function LoadingScreen() {
  return (
    <Container>
      <LogoWrapper>
        <img src={logo} alt="Logo" />
      </LogoWrapper>

      <LoadingSpinnerBounce />
    </Container>
  )
}
