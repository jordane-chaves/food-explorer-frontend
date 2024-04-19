import { ReactNode } from 'react'

import { Item } from './styles'

interface IngredientsItemProps {
  children: ReactNode
  isNew?: boolean
}

export function IngredientsItem({
  children,
  isNew = false,
}: IngredientsItemProps) {
  return <Item $isNew={isNew}>{children}</Item>
}
