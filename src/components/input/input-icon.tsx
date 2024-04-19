import { ElementType } from 'react'

import { IconWrapper } from './styles'

interface InputIconProps {
  icon: ElementType
}

export function InputIcon({ icon: Icon }: InputIconProps) {
  return (
    <IconWrapper>
      <Icon />
    </IconWrapper>
  )
}
