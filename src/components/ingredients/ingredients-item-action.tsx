import { ButtonHTMLAttributes, ElementType } from 'react'

import { IconButton } from './styles'

interface IngredientsActionProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType
}

export function IngredientsItemAction({
  icon: Icon,
  ...rest
}: IngredientsActionProps) {
  return (
    <IconButton type="button" {...rest}>
      {<Icon />}
    </IconButton>
  )
}
