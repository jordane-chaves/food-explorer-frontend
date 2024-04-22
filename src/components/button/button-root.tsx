import { ButtonHTMLAttributes } from 'react'

import { Container, LoadingSpin } from './styles'

interface ButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  variant?: 'primary' | 'secondary'
}

export function ButtonRoot({
  children,
  variant,
  loading = false,
  ...rest
}: ButtonRootProps) {
  return (
    <Container type="button" $variant={variant} {...rest} disabled={loading}>
      {loading ? <LoadingSpin /> : children}
    </Container>
  )
}
