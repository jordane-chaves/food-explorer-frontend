import { ReactNode, useState } from 'react'

import { CartContext, CartItem } from '.'

interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addItem(item: Omit<CartItem, 'id'>) {
    const data = {
      ...item,
      id: crypto.randomUUID(),
    }

    setCartItems((prev) => [...prev, data])
  }

  function removeItem(removedItem: CartItem) {
    const filtered = cartItems.filter((item) => item.id !== removedItem.id)
    setCartItems(filtered)
  }

  return (
    <CartContext.Provider value={{ addItem, removeItem, cartItems }}>
      {children}
    </CartContext.Provider>
  )
}
