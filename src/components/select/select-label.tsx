import { LabelHTMLAttributes } from 'react'

import { Label } from './styles'

export function SelectLabel(props: LabelHTMLAttributes<HTMLLabelElement>) {
  return <Label {...props} />
}
