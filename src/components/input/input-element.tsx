import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

type InputElementProps = { loading?: boolean } & (
  | ({
      component?: 'input'
    } & InputProps)
  | ({ component: 'textarea' } & TextareaProps)
)

export function InputElement({ loading = false, ...rest }: InputElementProps) {
  if (rest.component === 'textarea') {
    return <textarea {...rest} disabled={loading} />
  }

  return <input {...rest} disabled={loading} />
}
