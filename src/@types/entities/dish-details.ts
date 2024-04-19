import { Ingredient } from './ingredient'

export interface DishDetails {
  id: string
  category_id: string
  category: string
  name: string
  description: string
  price: number
  image_id: string
  image_url: string
  ingredients: Ingredient[]
  created_at: Date
  updated_at: Date
}
