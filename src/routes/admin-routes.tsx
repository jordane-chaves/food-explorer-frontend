import { Route, Routes } from 'react-router-dom'

import { DishView } from '@/pages/dish-view'
import { EditDish } from '@/pages/edit-dish'
import { Home } from '@/pages/home'
import { NewDish } from '@/pages/new-dish'
import { NotFound } from '@/pages/not-found'

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dish/new" element={<NewDish />} />
      <Route path="/dishes/:id" element={<DishView />} />
      <Route path="/dishes/:id/edit" element={<EditDish />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
