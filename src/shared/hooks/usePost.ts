import { ChangeEvent, FormEvent, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Dayjs } from 'dayjs'
import { useAuthContext, useTransactionContext } from '../contexts'
import { create, update } from '../firebase'
import { months } from '../states'
import { TTransactionType, TTransaction, TTypeColor } from '../types'
import { getCategories, getCategory, getColor, getElementValues } from '../functions'
import { getErrorMessage } from '../auth'

export const usePost = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { user } = useAuthContext()
  const { transactionContext, setUpdate } = useTransactionContext()
  
  const [ type, setType ] = useState(transactionContext.type)
  const [ category, setCategory ] = useState(transactionContext.category)
  const [ categories, setCategories ] = useState(getCategories(transactionContext.type))
  const [ transaction, setTransaction ] = useState<TTransaction>(transactionContext)
  const [ loader, setLoader ] = useState(false)
  const [ message, setMessage ] = useState('')

  const title = pathname === '/post/adicionar' ? 'Adicionar' : 'Editar'
  const color: TTypeColor = getColor(type)
  const borderColor = color === 'error' ? '#f44336' : '#90caf9'

  const handleTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const type = e.target.value as TTransactionType
    setType(type)
    setCategories(getCategories(type))
    setCategory(getCategory(type))
    setTransaction({ ...transaction, type })
  }

  const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCategory(e.currentTarget.value)
  }

  const handleDateChange = (e: Dayjs) => {
    const date = e.format('YYYY/MM/DD')
    setTransaction({ ...transaction, date })
  }

  const handleClose = () => {
    setMessage('')
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    try {
      setLoader(true)
      const [ description, value ] = getElementValues(e, ['description', 'value'])
      const [ year, month ] = transaction.date.split('/')
      const t: TTransaction = {
        ...transaction,
        description,
        category,
        value: Number(value),
        period: `${months[Number(month) - 1]}/${year}`,
        ref: user?.uid as string,
        timestamp: (new Date()).toLocaleString("en", { dateStyle: "medium", timeStyle: "medium" })
      }
      pathname === '/post/adicionar' ? 
        await create(t) : await update(t)
      setUpdate(true)
      navigate('/')
    } catch (error) {
      setLoader(false)
      const message = getErrorMessage('generic')
      setMessage(message)
    }
  }

  return {
    title, color, 
    type, handleTypeChange,
    category, handleCategoryChange,
    categories, borderColor, transaction, 
    handleDateChange, handleClose, handleSubmit,
    loader, message
  }
}
