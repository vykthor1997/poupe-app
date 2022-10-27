import { AccountBalance, AttachMoney, BeachAccess, DriveEta, FitnessCenter, HeartBroken, LinearScale, LocalAirport, LocalAtm, LocalHospital, OndemandVideo, Redeem, School, Score, Shop, ShoppingCart, TrendingUp } from '@mui/icons-material'
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
  category: 'Outros',
  description: '',
  value: 0,
  date: `${date.getFullYear()}/${formatZero(date.getMonth() + 1)}/${formatZero(date.getDate())}`
}

export const expenseCategories = [
  {
    name: 'Aposta',
    icon: Score
  },
  {
    name: 'Assinaturas',
    icon: OndemandVideo
  },
  {
    name: 'Compras',
    icon: Shop
  },
  {
    name: 'Educação',
    icon: School
  },
  {
    name: 'Esporte',
    icon: FitnessCenter
  },
  {
    name: 'Investimentos',
    icon: TrendingUp
  },
  {
    name: 'Lazer',
    icon: BeachAccess
  },
  {
    name: 'Mercado',
    icon: ShoppingCart
  },
  {
    name: 'Saúde',
    icon: LocalHospital
  },
  {
    name: 'Transporte',
    icon: DriveEta
  },
  {
    name: 'Viagem',
    icon: LocalAirport
  },
  {
    name: 'Outros',
    icon: LinearScale
  }
]

export const incomeCategories = [
  {
    name: 'Bônus',
    icon: AttachMoney
  },
  {
    name: 'Comissão',
    icon: AccountBalance
  },
  {
    name: 'Ivestimentos',
    icon: TrendingUp
  },
  {
    name: 'Presente',
    icon: Redeem
  },
  {
    name: 'Salário',
    icon: LocalAtm
  },
  {
    name: 'Outros',
    icon: LinearScale
  }
]