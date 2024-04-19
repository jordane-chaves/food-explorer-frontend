import { LabelHTMLAttributes } from 'react'

interface IngredientsLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  text: string
}

export function IngredientsLabel({ text, ...rest }: IngredientsLabelProps) {
  return <label {...rest}>{text}</label>
}
