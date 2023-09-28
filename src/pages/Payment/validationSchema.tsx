import { isValidCNPJ, isValidCPF, isValidPhone } from '@brazilian-utils/brazilian-utils'
import isValidCreditCard from 'card-validator'

import * as yup from 'yup'

export const schema = yup
  .object({
    fullName: yup
      .string()
      .required('Nome e sobrenome é obrigatório.')
      .min(3, 'Nome e sobrenome é muito curto.')
      .matches(/(\w.+\s).+/gi, 'O nome de conter o sobrenome.'),

    email: yup
      .string()
      .required('O email é obrigratório.')
      .email('O email deve ser válido.'),

    mobile: yup
      .string()
      .required('O celular é obrigratório.')
      .transform((value) => value.replace(/[^\d]/g, ''))
      .test('validateMobile', 'O celular inválido.', (value) => {
        return isValidPhone(value)
      }),

    document: yup
      .string()
      .required('O CPF/CNPJ é obrigatório.')
      .transform((value) => value.replace(/[^\d]/g, ''))
      .test('validateDocument', 'O CPF/CNPJ é inválido', (value) => {
        return isValidCPF(value) || isValidCNPJ(value)
      }),

    zipCode: yup
      .string()
      .required()
      .transform((val) => val.replace(/[^\d]/g, '')),

    street: yup.string()
      .required('O endereço é obrigratório.'),

    number: yup.string()
      .required('O número é obrigratório.'),

    complement: yup.string(),

    neigthborhood: yup.string()
      .required('O bairro é obrigratório.'),

    city: yup.string()
      .required('A cidade é obrigratório.'),

    state: yup.string()
      .required('O estado é obrigratório.'),

    creditCardNumber: yup
      .string()
      .required('O numero do cartão é obrigratório.')
      .transform((val) => val.replace(/[^\d]/g, ''))
      .test('validateCreditCardNumber', 'O número do cartão é inválido', (value) => {
        return isValidCreditCard.number(value).isValid;
      }),

    creditCardHolder: yup
      .string()
      .required('O nome do titular é obrigatório.')
      .min(3, 'O nome do titular é muito curto.')
      .matches(/(\w.+\s).+/gi, 'O nome do titular de conter o sobrenome.'),

    creditCardExpiration: yup
      .string()
      .required('A data de validade é obrigatória.')
      .transform((value) => {
        const [month, year] = value.split('/')

        if (month && year && month.length === 2 && year.length === 2)
          return new Date(+`20${year}`, +month - 1, 1).toISOString()

        return value
      }).test('validateCreditCardExpiration', 'A data de validade é inválida', (value) => {
        const expirationDate = new Date(value)
        const today = new Date()

        return expirationDate >= today
      }),

    creditCardSecurityCode: yup
      .string()
      .required('O CVV é obrigatório.')
      .transform((value) => value.replace(/[^\d]+/g, ''))
      .min(3, 'O CVV de possuir entre 3 e 4 dígitos.')
      .max(3, 'O CVV de possuir entre 3 e 4 dígitos.')
  })
  .required()
export type FieldValeu = yup.InferType<typeof schema>
