import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react'

import { Input } from './styles'

function IngredientsItemInputInner(
  {
    loading = false,
    ...rest
  }: InputHTMLAttributes<HTMLInputElement> & { loading?: boolean },
  ref: ForwardedRef<HTMLInputElement>,
) {
  return <Input ref={ref} {...rest} disabled={loading} />
}

export const IngredientsItemInput = forwardRef(IngredientsItemInputInner)
