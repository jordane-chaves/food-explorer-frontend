import { SelectHTMLAttributes } from 'react'

import { CaretDown } from '@phosphor-icons/react'

import { SelectWrapper } from './styles'

interface Option {
  label: string
  value: string
}

interface SelectElementProps extends SelectHTMLAttributes<HTMLSelectElement> {
  emptyText?: string
  options: Option[]
  loading?: boolean
}

export function SelectElement({
  emptyText,
  options,
  loading = false,
  ...rest
}: SelectElementProps) {
  const isEmpty = options.length === 0
  const empty = emptyText ?? 'Nenhuma opção...'

  return (
    <SelectWrapper>
      <select {...rest} disabled={isEmpty || loading}>
        {isEmpty ? (
          <option value="">{empty}</option>
        ) : (
          options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))
        )}
      </select>

      <CaretDown />
    </SelectWrapper>
  )
}
