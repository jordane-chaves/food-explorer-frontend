import { CaretLeft, Receipt } from '@phosphor-icons/react'
import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { DishDetails } from '@/@types/entities/dish-details'
import { Button } from '@/components/button'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Stepper } from '@/components/stepper'
import { Tag } from '@/components/tag'
import { useAuth } from '@/hooks/auth'
import { api } from '@/services/api'
import { UserRoles } from '@/utils/user-roles.enum'

import { Dialog } from '@/components/dialog'
import { useCart } from '@/hooks/cart'
import {
  Actions,
  Container,
  Content,
  DishContainer,
  DishInfo,
  DishInfoWrapper,
  ImagePreview,
  ImageWrapper,
  Ingredients,
  ReturnButton,
} from './styles'

export function DishView() {
  const [dish, setDish] = useState<DishDetails | null>(null)
  const [amount, setAmount] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()
  const params = useParams()
  const { user } = useAuth()
  const { addItem } = useCart()

  const dishId = params.id

  const userRole = user?.role ?? UserRoles.CUSTOMER
  const canEditDish = [UserRoles.ADMIN].includes(userRole)
  const canAddDishToCart = [UserRoles.CUSTOMER].includes(userRole)

  const loadingParentClass = isLoading ? 'loading' : ''
  const loadingItemClass = isLoading ? 'loading-item' : ''

  function handleBack() {
    return navigate(-1)
  }

  function handleEditDish() {
    return navigate(`/dishes/${dishId}/edit`)
  }

  function handleAddDishToCart() {
    if (!dish) {
      return
    }

    addItem({
      amount,
      dishId: dish.id,
      imageUrl: dish.image_url,
      name: dish.name,
      price: dish.price,
    })
  }

  useEffect(() => {
    async function getDish() {
      try {
        setIsLoading(true)
        const response = await api.get<{ dish: DishDetails }>(
          `/dishes/${dishId}`,
        )

        setDish(response.data.dish)
      } catch (error) {
        if (error instanceof AxiosError && error.response) {
          return alert(error.response.data.message)
        } else {
          return alert('Falha ao buscar os dados do produto')
        }
      } finally {
        setIsLoading(false)
      }
    }

    getDish()
  }, [dishId])

  const price = (dish?.price ?? 0) * amount
  const formattedPrice = price.toLocaleString('pt-BR', {
    currency: 'BRL',
    style: 'currency',
  })

  return (
    <Container className={loadingParentClass}>
      <Header />

      <Content>
        <ReturnButton onClick={handleBack}>
          <CaretLeft /> voltar
        </ReturnButton>

        <DishContainer>
          <Dialog.Root>
            <Dialog.Trigger>
              <ImageWrapper className={loadingItemClass}>
                <img src={dish?.image_url} alt={`Foto de ${dish?.name}`} />
              </ImageWrapper>
            </Dialog.Trigger>

            <Dialog.Content>
              <Dialog.Close />
              <ImagePreview>
                <img src={dish?.image_url} alt={`Foto de ${dish?.name}`} />
              </ImagePreview>
            </Dialog.Content>
          </Dialog.Root>

          <DishInfoWrapper>
            <DishInfo>
              <h1 className={loadingItemClass}>{dish?.name}</h1>
              <p className={loadingItemClass}>{dish?.description}</p>

              <Ingredients className={loadingItemClass}>
                {dish?.ingredients.map((ingredient) => (
                  <Tag key={ingredient.id} text={ingredient.name} />
                ))}
              </Ingredients>
            </DishInfo>

            {canAddDishToCart && (
              <Actions>
                <Stepper
                  onCountChange={(value) => {
                    setAmount(value)
                  }}
                />
                <Button.Root disabled={isLoading} onClick={handleAddDishToCart}>
                  <Button.Icon icon={Receipt} />
                  <Button.Text text={`incluir ∙ ${formattedPrice}`} />
                </Button.Root>
              </Actions>
            )}

            {canEditDish && (
              <Button.Root onClick={handleEditDish} disabled={isLoading}>
                <Button.Text text="Editar prato" />
              </Button.Root>
            )}
          </DishInfoWrapper>
        </DishContainer>
      </Content>

      <Footer />
    </Container>
  )
}
