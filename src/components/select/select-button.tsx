import { ButtonHTMLAttributes, ElementType } from 'react'

interface SelectButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ElementType
  text: string
  loading?: boolean
}

export function SelectButton({
  icon: Icon,
  text,
  loading = false,
  ...rest
}: SelectButtonProps) {
  return (
    <button type="button" {...rest} disabled={loading}>
      {Icon && <Icon />}
      <span>{text}</span>
    </button>
  )
}
