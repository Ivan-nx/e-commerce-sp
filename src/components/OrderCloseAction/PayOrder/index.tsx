import { currencyFormat } from '../../../helpers/currencyFormat'
import { useCart } from '../../../hooks/useCart'
import { Container } from '../styles'

export const PayOrder = () => {
  const { cart } = useCart()

  const totalAmount = cart.reduce((acc, item) => (acc += item.subtotal), 0)

  return (
    <Container>
      <button type='submit'>Pagar</button>
      <span>
        total <strong>{currencyFormat(totalAmount)}</strong>
      </span>
    </Container>
  )
}