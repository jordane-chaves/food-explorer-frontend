import { Container } from './styles'

export interface TagProps {
  text: string
}

export function Tag({ text }: TagProps) {
  return <Container>{text}</Container>
}
