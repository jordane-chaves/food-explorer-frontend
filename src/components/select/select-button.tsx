import { ButtonHTMLAttributes, ElementType } from 'react'

interface SelectButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ElementType
  text: string
}

export function SelectButton({ icon: Icon, text, ...rest }: SelectButtonProps) {
  return (
    <button type="button" {...rest}>
      {Icon && <Icon />}
      <span>{text}</span>
    </button>
  )
}
