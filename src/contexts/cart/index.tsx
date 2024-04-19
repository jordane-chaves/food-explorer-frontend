import { createContext } from 'react'
import { z } from 'zod'

const cartItemSchema = z.object({
  id: z.string().uuid(),
  amount: z.number().min(1),
  dishId: z.string().uuid(),
  imageUrl: z.string().url(),
  name: z.string(),
  price: z.number(),
})

export const cartContextSchema = z.object({
  addItem: z
    .function()
    .args(cartItemSchema.omit({ id: true }))
    .returns(z.void()),
  removeItem: z.function().args(cartItemSchema).returns(z.void()),
  cartItems: z.array(cartItemSchema),
})

export type CartItem = z.infer<typeof cartItemSchema>
export type CartContextProps = z.infer<typeof cartContextSchema>

export const CartContext = createContext<Partial<CartContextProps>>({})
