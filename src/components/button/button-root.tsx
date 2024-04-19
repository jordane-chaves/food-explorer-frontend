import { ButtonHTMLAttributes } from 'react'

import { Container } from './styles'

interface ButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  variant?: 'primary' | 'secondary'
}

export function ButtonRoot({
  children,
  loading,
  variant,
  ...rest
}: ButtonRootProps) {
  return (
    <Container type="button" $variant={variant} disabled={loading} {...rest}>
      {children}
    </Container>
  )
}
