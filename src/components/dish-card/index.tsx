import { PencilSimple } from '@phosphor-icons/react'
import { MouseEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { DishDetails } from '@/@types/entities/dish-details'
import { useAuth } from '@/hooks/auth'
import { UserRoles } from '@/utils/user-roles.enum'

import { useCart } from '@/hooks/cart'
import { Button } from '../button'
import { Stepper } from '../stepper'
import {
  Actions,
  Container,
  Description,
  IconButton,
  ImageWrapper,
  Price,
  Title,
} from './styles'

interface DishCardProps {
  dish: DishDetails
}

export function DishCard({ dish }: DishCardProps) {
  const [amount, setAmount] = useState(1)

  const navigate = useNavigate()
  const { user } = useAuth()
  const { addItem } = useCart()

  const userRole = user?.role ?? UserRoles.CUSTOMER
  const canEditDish = [UserRoles.ADMIN].includes(userRole)
  const canAddDishToCart = [UserRoles.CUSTOMER].includes(userRole)

  const formattedPrice = dish.price.toLocaleString('pt-BR', {
    currency: 'BRL',
    style: 'currency',
  })

  function handleViewDish() {
    return navigate(`/dishes/${dish.id}`)
  }

  function handleEditDish(event: MouseEvent<HTMLElement>) {
    event.stopPropagation()
    return navigate(`/dishes/${dish.id}/edit`)
  }

  function handleAddToCart(event: MouseEvent<HTMLElement>) {
    event.stopPropagation()

    addItem({
      amount,
      dishId: dish.id,
      imageUrl: dish.image_url,
      name: dish.name,
      price: dish.price,
    })
  }

  return (
    <Container onClick={handleViewDish}>
      <ImageWrapper>
        <img src={dish.image_url} alt={`Imagem de ${dish.name}`} />
      </ImageWrapper>

      <Title>{dish.name} &gt;</Title>
      <Description>{dish.description}</Description>

      <Price>{formattedPrice}</Price>

      {canAddDishToCart && (
        <Actions>
          <Stepper onCountChange={(value) => setAmount(value)} />
          <Button.Root onClick={handleAddToCart}>
            <Button.Text text="incluir" />
          </Button.Root>
        </Actions>
      )}

      {canEditDish && (
        <IconButton onClick={handleEditDish}>
          <PencilSimple />
        </IconButton>
      )}
    </Container>
  )
}
