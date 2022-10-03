import { TTransaction } from '../types'

const date = new Date()

export const formatZero = (zero: number) => zero < 10 ? `0${zero}` : zero

export const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

export const month = months[date.getMonth()]

export const wallet = {
  balance: 0,
  incomes: 0,
  expenses: 0
}

export const transaction: TTransaction = {
  ref: '',
  period: '',
  type: 'Despesa',
  description: '',
  value: 0,
  date: `${date.getFullYear()}/${formatZero(date.getMonth() + 1)}/${formatZero(date.getDate())}`
}
