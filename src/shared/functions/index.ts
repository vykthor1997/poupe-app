import { FormEvent } from 'react'
import { v4 as uuid } from 'uuid'
import { LinearScale } from '@mui/icons-material'
import { Rule } from '../environment'
import { expenseCategories, incomeCategories, months } from '../states'
import { TRecorrency, TTransaction, TTransactionType } from '../types'

export const formatZero = (zero: number) => zero < 10 ? `0${zero}` : zero

export const formatTransactionsBook = (transactions: TTransaction[]) => {
  const allDates = transactions.map(({ date }) => date)
  const dates = [ ...new Set(allDates) ]
  const p = dates.map(date => {
    const [ _, month, day ] = date.split('/') 
    const m = months[Number(month) - 1].slice(0, 3).toLocaleLowerCase()
    const filteredTransactions = transactions.filter(posting => posting.date === date)
    const total = filteredTransactions.reduce((count, { value, type }) => {
      return type === 'Despesa' ? count -= value : count += value
    }, 0)
    return {
      date: `${day}/${m}`,
      total,
      transactions: filteredTransactions
    }
  })
  return p
}

export const formatCurrency = (value: number) => (
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
)

export const getElementValues = (e: FormEvent<HTMLFormElement>, elements: string[]): string[] => (
  elements.map(elementName => {
    const element = e.currentTarget.elements.namedItem(elementName) as HTMLInputElement | null
    return element ? element.value : ''
  })
)

export const getColor = (type: TTransactionType) => type === 'Receita' ? 'primary' : 'error'

export const getCategories = (type: TTransactionType) => (
  type === 'Despesa' ? expenseCategories : incomeCategories
)

export const getCategory = (type: TTransactionType) => (
  type === 'Despesa' ? 'Outros' : 'Salário'
)

export const getCategoryIcon = (category: string) => {
  const expense = expenseCategories.find(({ name }) => name === category)
  if (expense) return expense.icon

  const income = incomeCategories.find(({ name }) => name === category)
  if (income) return income.icon

  return LinearScale
}

export const addRecorrency = (transaction: TTransaction, recorrency: TRecorrency): TTransaction[] => {
  const { frequency, take } = recorrency
  const { date } = transaction
  const [ year, month, day ] = date.split('/') 

  const rule = new Rule({
    frequency,
    start: new Date(Number(year), Number(month), Number(day)),
  })
  
  const id = uuid()

  const transactions = rule.occurrences({ take }).toArray().map(({ date: d }, index) => {
    const date = `${d.getFullYear()}/${formatZero(d.getMonth() + 1)}/${formatZero(d.getDate())}`
    const period = `${months[d.getMonth() - 1 + index]}/${d.getFullYear()}`
    return {
      ...transaction,
      date,
      period,
      installment: `${index + 1}/${take}`,
      recorrencyRef: id
    }
  })
  return transactions
}