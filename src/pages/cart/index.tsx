import EmptyCartImage from '@/assets/empty_cart.svg'
import { CartItem } from '@/components/cart-item'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { useCart } from '@/hooks/cart'

import { Container, Content, EmptyCart, Items, Orders, Summary } from './styles'

export function Cart() {
  const { cartItems } = useCart()

  const total = cartItems.reduce((result, item) => {
    return result + item.amount * item.price
  }, 0)

  const formattedTotal = total.toLocaleString('pt-BR', {
    currency: 'BRL',
    style: 'currency',
  })

  return (
    <Container>
      <Header />

      <Content>
        {cartItems.length === 0 ? (
          <EmptyCart>
            <img src={EmptyCartImage} alt="Empty cart" />
            <h2>Carrinho vazio</h2>
          </EmptyCart>
        ) : (
          <Orders>
            <h1>Meu pedido</h1>

            <Items>
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}

              <Summary>
                <strong>Total: {formattedTotal}</strong>
              </Summary>
            </Items>
          </Orders>
        )}
      </Content>

      <Footer />
    </Container>
  )
}
