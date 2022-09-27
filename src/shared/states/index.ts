import { TTransaction } from '../types'

const date = new Date()

export const formatMonth = (month: number) => month < 10 ? `0${month}` : month

export const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

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
  date: `${date.getFullYear()}/${formatMonth(date.getMonth() + 1)}/${date.getDate()}`
}
