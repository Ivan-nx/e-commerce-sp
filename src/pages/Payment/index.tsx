import { Head } from '../../components/Head'
import { OrderHeader } from '../../components/OrderHeader'
import { Container, Form, Inner } from './styles'

export default function Payment() {
  return (
    <Container>
      <Head title='Pagamento' />
      <OrderHeader />
      <Inner>
        <Form>
          <h4>Informações Pessoais</h4>

          <div className='field'>
            <label htmlFor='full-name'>Nome e Sobrenome</label>
            <input type='text' id='full-name' name='full-name' autoComplete='name' />
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='email'>E-mail</label>
              <input type='email' id='email' name='email' autoComplete='email' />
            </div>

            <div className='field'>
              <label htmlFor='mobile'>Celuar</label>
              <input type='tel' id='mobile' name='mobile' autoComplete='mobile' />
            </div>

            <div className='field'>
              <label htmlFor='document'>CPF/CNPJ</label>
              <input type='text' id='document' name='document' autoComplete='document' />
            </div>
          </div>
        </Form>
      </Inner>
    </Container>
  )
}
