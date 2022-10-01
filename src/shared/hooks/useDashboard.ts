import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SelectChangeEvent } from '@mui/material'
import { transaction as t, month as m } from '../states'
import { TTransaction } from '../types'
import { destroy, read } from '../firebase'
import { useAuthContext, useTransactionContext } from '../contexts'
import { getErrorMessage } from '../auth'

export const useDashboard = () => {
  const { user } = useAuthContext()
  const { 
    update, setUpdate, 
    setTransactionContext, 
    transactionsContext, setTransactionsContext,
    data 
  } = useTransactionContext()
  const navigate = useNavigate()
  const [ month, setMonth ] = useState(m)
  const [ year, setYear ] = useState<string | number>(2022)
  const [ transaction, setTransaction ] = useState<TTransaction>()
  const [ transactions, setTransactions ] = useState<TTransaction[]>(transactionsContext)
  const [ wallet, setWallet ] = useState(data.wallet)
  const [ loader, setLoader ] = useState(false)
  const [ message, setMessage ] = useState('')

  useEffect(() => {
    (async () => {
      if (!update) return
      try {
        setLoader(true)
        const period = `${month}/${year}`
        const transactions: TTransaction[] = await read(user?.uid as string, period)
        const expenses = transactions.filter(({ type }) => type === 'Despesa')
        const incomes = transactions.filter(({ type }) => type === 'Receita')
        const totalExpenses = expenses.reduce((count, { value }) => count += value, 0)
        const totalIncomes = incomes.reduce((count, { value }) => count += value, 0)
        const wallet = {
          expenses: totalExpenses,
          incomes: totalIncomes,
          balance: totalIncomes - totalExpenses
        }
        setWallet(wallet)
        setTransactions(transactions)
        setTransactionsContext(transactions)
        setTransactionContext(t)
        setUpdate(false)
      } catch (error) {
        const message = getErrorMessage('generic')
        setMessage(message)
      } finally {
        setLoader(false)
      }
    })()
  }, [year, month])

  const handleMonthChange= (e: SelectChangeEvent) => {
    setMonth(e.target.value)
    setUpdate(true)
  }

  const handleYearChange= (e: SelectChangeEvent) => {
    setYear(e.target.value)
    setUpdate(true)
  }

  const handleActionClick = (transaction: TTransaction) => {
    setTransaction(transaction)
  }

  const handleClose = () => {
    setTransaction(undefined)
    setMessage('')
  }

  const handleUpdate = () => {
    setTransactionContext(transaction as TTransaction)
    navigate('/post/editar')
  }

  const handleDelete = async () => {
    transaction && await destroy(transaction.id as string)
    setTransaction(undefined)
    setUpdate(true)
  }
  
  const handleNavigate = () => {
    setTransactionContext(t)
  }

  return {
    month, handleMonthChange,
    year, handleYearChange,
    wallet, transactions,
    transaction, handleActionClick,
    handleClose, handleUpdate, handleDelete, handleNavigate,
    loader, message
  }
}
