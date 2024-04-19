import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react'

import { Input } from './styles'

function IngredientsItemInputInner(
  props: InputHTMLAttributes<HTMLInputElement>,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return <Input ref={ref} {...props} />
}

export const IngredientsItemInput = forwardRef(IngredientsItemInputInner)
