import { HTMLAttributes, ReactNode } from 'react'

import { Container } from './styles'

interface IngredientsRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function IngredientsRoot({ children, ...rest }: IngredientsRootProps) {
  return <Container {...rest}>{children}</Container>
}
