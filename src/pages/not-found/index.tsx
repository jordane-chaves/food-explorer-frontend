import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/button'

import { Container, Content } from './styles'

export function NotFound() {
  const navigate = useNavigate()

  return (
    <Container>
      <Content>
        <h1>Oops!</h1>
        <p>A página que você tentou acessar não existe.</p>

        <Button.Root onClick={() => navigate('/')}>
          <Button.Text text="Voltar para o início" />
        </Button.Root>
      </Content>
    </Container>
  )
}
