import { createContext, ReactNode, useContext, useState } from 'react'
import { TTransaction } from '../types'
import { transaction as t } from '../states'

type TTransactionContext = {
  update: boolean
  transactionContext: TTransaction
  transactionsContext: TTransaction[]
  setUpdate(conditional: boolean): void
  setTransactionContext(transaction: TTransaction): void
  setTransactionsContext(transactions: TTransaction[]): void
  data: {
    expenses: TTransaction[]
    incomes: TTransaction[]
    wallet: {
      expenses: number
      incomes: number
      balance: number
    }
  }
}

const TransactionContext = createContext({} as TTransactionContext)

export const useTransactionContext = () => useContext(TransactionContext)

export const TransactionProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [ update, setUpdate ] = useState(true)
  const [ transaction, setTransaction ] = useState(t)
  const [ transactions, setTransactions ] = useState([] as TTransaction[])

  const expenses = transactions.filter(({ type }) => type === 'Despesa')
  const incomes = transactions.filter(({ type }) => type === 'Receita')
  const totalExpenses = expenses.reduce((count, { value }) => count += value, 0)
  const totalIncomes = incomes.reduce((count, { value }) => count += value, 0)
  const wallet = {
    expenses: totalExpenses,
    incomes: totalIncomes,
    balance: totalIncomes - totalExpenses
  }

  return (
    <TransactionContext.Provider 
      value={{ 
        update, setUpdate,
        transactionContext: transaction, 
        setTransactionContext: setTransaction,
        transactionsContext: transactions, 
        setTransactionsContext: setTransactions, 
        data: {
          expenses,
          incomes,
          wallet
        }
      }}
    >
     {children}
    </TransactionContext.Provider>
  )
}
