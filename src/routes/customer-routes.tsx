import { Route, Routes } from 'react-router-dom'

import { Cart } from '@/pages/cart'
import { DishView } from '@/pages/dish-view'
import { Home } from '@/pages/home'
import { NotFound } from '@/pages/not-found'

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dishes/:id" element={<DishView />} />
      <Route path="/cart" element={<Cart />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
