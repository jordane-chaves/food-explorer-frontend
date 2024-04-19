import { CartItem as CartItemType } from '@/contexts/cart'

import { useCart } from '@/hooks/cart'
import {
  CartText,
  Container,
  ImageWrapper,
  Price,
  RemoveButton,
} from './styles'

interface CartItemProps {
  item: CartItemType
}

export function CartItem({ item }: CartItemProps) {
  const { removeItem } = useCart()

  const itemTotal = item.amount * item.price

  const formattedPrice = itemTotal.toLocaleString('pt-BR', {
    currency: 'BRL',
    style: 'currency',
  })

  function handleRemoveItem() {
    removeItem(item)
  }

  return (
    <Container>
      <ImageWrapper>
        <img src={item.imageUrl} alt={`Imagem de ${item.name}`} />
      </ImageWrapper>

      <div>
        <CartText>
          <strong>
            {item.amount} x {item.name}
          </strong>
          <Price>{formattedPrice}</Price>
        </CartText>

        <RemoveButton onClick={handleRemoveItem}>Excluir</RemoveButton>
      </div>
    </Container>
  )
}
