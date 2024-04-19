import { ElementType } from 'react'

import { IconWrapper } from './styles'

interface ButtonIconProps {
  icon: ElementType
}

export function ButtonIcon({ icon: Icon }: ButtonIconProps) {
  return (
    <IconWrapper>
      <Icon />
    </IconWrapper>
  )
}
