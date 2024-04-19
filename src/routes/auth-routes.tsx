import { Route, Routes } from 'react-router-dom'

import { NotFound } from '@/pages/not-found'
import { SignIn } from '@/pages/sign-in'
import { SignUp } from '@/pages/sign-up'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
