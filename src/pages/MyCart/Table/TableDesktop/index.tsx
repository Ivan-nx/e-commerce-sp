import { currencyFormat } from '../../../../helpers/currencyFormat'
import { useCart } from '../../../../hooks/useCart'
import { Container } from './styles'
import plusImg from '../../../../assets/circle-plus.svg'
import minusImg from '../../../../assets/circle-minus.svg'
import { FaTrashAlt } from 'react-icons/fa'
import { ConfirmeOrder } from '../../../../components/ConfirmOrder'


export const TableDesktop = () => {
  const { cart, removeSnackFromCart, snackCartDencrement, snackCartIncrement } = useCart()

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Lanche(s)</th>
            <th>Quantidade</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={`${item.snack}-${item.id}`}>
              <td>
                <img src={item.image} alt={item.name} />
              </td>
              <td>
                <h4>{item.name}</h4>
                {currencyFormat(item.price)}
              </td>
              <td>
                <div>
                  <button type={'button'} onClick={() => snackCartDencrement(item)}>
                    <img src={minusImg} alt='decrementar snaks' />
                  </button>
                  <span>{`${item.quantity}`.padStart(2, '0')}</span>
                  <button type={'button'} onClick={() => snackCartIncrement(item)}>
                    <img src={plusImg} alt='incrementar snaks' />
                  </button>
                </div>
              </td>

              <td>
                <h5>{currencyFormat(item.subtotal)}</h5>
              </td>
              <td>
                <button title='button' onClick={()=> removeSnackFromCart(item)}>
                <FaTrashAlt />
                </button>
                </td>

            </tr>
          ))}
        </tbody>
      </table>
      <ConfirmeOrder />
    </Container>
  )
}
