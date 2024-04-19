import LogoFooterImg from '@/assets/logo-footer.svg'

import { Container, Content, LogoImg } from './styles'

export function Footer() {
  return (
    <Container>
      <Content>
        <LogoImg src={LogoFooterImg} alt="Food Explorer" />
        <span>© 2023 - Todos os direitos reservados.</span>
      </Content>
    </Container>
  )
}
