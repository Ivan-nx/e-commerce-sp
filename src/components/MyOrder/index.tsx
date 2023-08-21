import { useCart }from '../../hooks/useCart'
import {Container} from './styles'
import { ReactComponent as CardIcon } from '../../assets/shopping-cart.svg'

export const MyOrder = () => {
  const { cart } = useCart();
  return (
  <Container to={'cart'}>
    <span>Meus pedidos</span>
    <CardIcon />
    {cart.length !== 0 && <span>{`${cart.length}`.padStart(2, '0')}</span> }
  </Container>
  )
}
