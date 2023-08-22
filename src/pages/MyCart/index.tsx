import { Container } from './styles'
import { Head } from '../../components/Head'
import { OrderHeader } from '../../components/OrderHeader'
import { Table } from './Table'

export default function Main() {
  return (
    <Container>
      <Head title='Carrinho' />
      <OrderHeader />
      <Table />
    </Container>
  )
}
