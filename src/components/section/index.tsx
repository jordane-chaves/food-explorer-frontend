import { HTMLAttributes } from 'react'

import { Container, Content } from './styles'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  title: string
}

export function Section({ title, children, ...rest }: SectionProps) {
  return (
    <Container {...rest}>
      <h2>{title}</h2>
      <Content>{children}</Content>
    </Container>
  )
}
