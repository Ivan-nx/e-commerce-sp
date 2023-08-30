import { Head } from '../../components/Head'
import { PayOrder } from '../../components/OrderCloseAction/PayOrder'
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

          <h4>Endereço de Entrega</h4>
          <div className='field'>
            <label htmlFor='zipcode'>CEP</label>
            <input
              type='text'
              name='zipecode'
              id='zipecode'
              autoComplete='postal-code'
              style={{ width: '120px' }}
            />
          </div>

          <div className='field'>
            <label htmlFor='street'>Endereço</label>
            <input type='text' name='street' id='strer' autoComplete='street-address' />
          </div>

          <div className='field'>
            <label htmlFor='number'>Número</label>
            <input type='text' id='number' name='number' />
          </div>

          <div className='field'>
            <label htmlFor='complement'>Complemento</label>
            <input type='text' id='complement' name='complement' />
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='neigthborhood'>Bairro</label>
              <input type='text' name='neigthborhood' id='neigthborhood' />
            </div>
            <div className='field'>
              <label htmlFor='city'>Cidade</label>
              <input type='text' name='city' id='city' />
            </div>

            <div className='field'>
              <label htmlFor='state'>Estado:</label>
              <select id='state' name='state'>
                <option value=''>Selecione</option>
                <option value='AC'>Acre</option>
                <option value='AL'>Alagoas</option>
                <option value='AP'>Amapá</option>
                <option value='AM'>Amazonas</option>
                <option value='BA'>Bahia</option>
                <option value='CE'>Ceará</option>
                <option value='DF'>Distrito Federal</option>
                <option value='ES'>Espírito Santo</option>
                <option value='GO'>Goiás</option>
                <option value='MA'>Maranhão</option>
                <option value='MT'>Mato Grosso</option>
                <option value='MS'>Mato Grosso do Sul</option>
                <option value='MG'>Minas Gerais</option>
                <option value='PA'>Pará</option>
                <option value='PB'>Paraíba</option>
                <option value='PR'>Paraná</option>
                <option value='PE'>Pernambuco</option>
                <option value='PI'>Piauí</option>
                <option value='RJ'>Rio de Janeiro</option>
                <option value='RN'>Rio Grande do Norte</option>
                <option value='RS'>Rio Grande do Sul</option>
                <option value='RO'>Rondônia</option>
                <option value='RR'>Roraima</option>
                <option value='SC'>Santa Catarina</option>
                <option value='SP'>São Paulo</option>
                <option value='SE'>Sergipe</option>
                <option value='TO'>Tocantins</option>
              </select>
            </div>
          </div>

          <h4>Pagamento</h4>

          <div className='field'>
              <label htmlFor='credit-card-holder-name'>Nome Impresso no Cartão</label>
              <input
                type='text'
                name='credit-card-holder-name'
                id='credit-card-holder-name'
                autoComplete='cc-name'
              />
            </div>

            <div className='field'>
              <label htmlFor='credit-card-number'>Número do Cartão</label>
              <input
                type='text'
                name='credit-card-number'
                id='credit-card-number'
                autoComplete='cc-number'
              />
            </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='credit-card-expiration'>Validade (MM/AA)</label>
              <input
                type='text'
                name='credit-card-expiration'
                id='credit-card-expiration'
                autoComplete='cc-exp'
              />
            </div>

            <div className='field'>
              <label htmlFor='credit-card-code'>Código de Segurança (CVV)</label>
              <input
                type='text'
                name='credit-card-code'
                id='credit-card-code'
                autoComplete='cc-csc'
              />
            </div>
          </div>
        </Form>
        <PayOrder />
      </Inner>
    </Container>
  )
}
