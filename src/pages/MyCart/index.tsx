import { Container } from './styles'
import { Head } from '../../components/Head'
import { OrderHeader } from '../../components/OrderHeader'

export default function Main() {
  return (
    <Container>
      <Head title='Carrinho' />
      <OrderHeader />
    </Container>
  )
}
