import { ButtonHTMLAttributes, ElementType } from 'react'

import { IconButton } from './styles'

interface IngredientsActionProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType
  loading?: boolean
}

export function IngredientsItemAction({
  icon: Icon,
  loading = false,
  ...rest
}: IngredientsActionProps) {
  return (
    <IconButton type="button" {...rest} disabled={loading}>
      {<Icon />}
    </IconButton>
  )
}
