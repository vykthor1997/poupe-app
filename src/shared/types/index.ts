export type TTransactionType = 'Despesa' | 'Receita'

export type TTransaction = {
  id?: string
  timestamp?: string
  ref: string 
  period: string
  type: TTransactionType
  category: string
  description: string
  value: number
  date: string
  installment?: string
  recorrencyRef?: string
}

export type TTypeColor = 'error' | 'primary'

export type TAuthService = (email: string, password: string) => Promise<void>

export type TRecorrency = {
  frequency: 'YEARLY' | 'WEEKLY' | 'MONTHLY'
  take: number
}
