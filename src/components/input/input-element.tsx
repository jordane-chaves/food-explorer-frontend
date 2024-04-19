import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

type InputElementProps =
  | ({
      component?: 'input'
    } & InputProps)
  | ({ component: 'textarea' } & TextareaProps)

export function InputElement(props: InputElementProps) {
  if (props.component === 'textarea') {
    return <textarea {...props} />
  }

  return <input {...props} />
}
