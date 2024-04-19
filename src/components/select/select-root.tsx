import { HTMLAttributes, ReactNode } from 'react'

import { Container } from './styles'

interface SelectRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function SelectRoot({ children, ...rest }: SelectRootProps) {
  return <Container {...rest}>{children}</Container>
}
