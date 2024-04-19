import { useContext } from 'react'

import {
  CartContext,
  CartContextProps,
  cartContextSchema,
} from '@/contexts/cart'

export function useCart(): CartContextProps {
  const context = useContext(CartContext)
  return cartContextSchema.parse(context)
}
