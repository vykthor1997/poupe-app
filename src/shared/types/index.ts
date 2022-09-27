export type TTransactionType = 'Despesa' | 'Receita'

export type TTransaction = {
  id?: string
  timestamp?: string
  ref: string 
  period: string
  type: TTransactionType
  description: string
  value: number
  date: string
}

export type TTypeColor = 'error' | 'primary'

export type TAuthService = (email: string, password: string) => Promise<void>
