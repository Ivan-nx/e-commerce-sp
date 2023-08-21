import { Link } from 'react-router-dom'
import logoImg from '../../assets/logo.svg'
import { Container } from './styles'
import { useCart } from '../../hooks/useCart'
import {ReactComponent as CartIcon } from '../../assets/shopping-cart.svg'

export function OrderHeader() {
  const { cart } = useCart();
  return (
    <Container>
      <Link to='/' >
      <img src={logoImg} alt="Food Commercer" />
      </Link>
      <div>
        <div>
          <h3>Meus Pedidos</h3>
          <span>
            <strong>
              {`${cart.length}`.padStart(2, '0')}
            </strong> Item(s)
          </span>
        </div>
        <CartIcon />
      </div>
    </Container>
  )
}
