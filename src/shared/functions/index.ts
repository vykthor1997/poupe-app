import { FormEvent } from 'react'
import { months } from '../states'
import { TTransaction, TTransactionType } from '../types'

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
