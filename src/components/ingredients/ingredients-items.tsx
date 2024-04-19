import { ReactNode } from 'react'

import { ItemsContainer } from './styles'

interface IngredientsItemsProps {
  children: ReactNode
}

export function IngredientsItems({ children }: IngredientsItemsProps) {
  return <ItemsContainer>{children}</ItemsContainer>
}
