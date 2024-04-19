import { LabelHTMLAttributes, ReactNode } from 'react'

import { Container, Content, Description } from './styles'

interface InputRootProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode
  label?: string
  description?: string
}

export function InputRoot({
  children,
  label,
  description,
  ...rest
}: InputRootProps) {
  return (
    <Container {...rest}>
      {label}
      <Content>{children}</Content>
      {description && (
        <Description>
          <span>{description}</span>
        </Description>
      )}
    </Container>
  )
}
