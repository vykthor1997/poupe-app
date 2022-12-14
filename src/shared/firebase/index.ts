import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, query, updateDoc, where } from 'firebase/firestore'
import { authConfig, db } from '../environment'
import { TTransaction } from '../types'

export const login = async (email: string, password: string): Promise<void> => {
  await signInWithEmailAndPassword(authConfig, email, password)
} 

export const register = async (email: string, password: string): Promise<void> => {
  const res = await createUserWithEmailAndPassword(authConfig, email, password)
  await addDoc(collection(db, 'users'), { user: res.user.uid })
} 

export const logout = async (): Promise<void> => {
  await authConfig.signOut()
} 

export const create = async (transaction: TTransaction): Promise<void> => {
  await addDoc(collection(db, 'transactions'), transaction)
}

export const read = async (userId: string, period: string): Promise<TTransaction[]> => {
  const q = query(
    collection(db, 'transactions'),
    where('ref', '==', userId),
    where('period', '==', period),
    orderBy('date', 'desc')
  )
  const { docs } = await getDocs(q)
  const transactions = docs.map(doc => ({ id: doc.id, ...doc.data() })) as TTransaction[]
  return transactions
}

export const update = async (transaction: TTransaction): Promise<void> => {
  await updateDoc(doc(db, 'transactions', transaction.id as string), transaction)
}

export const destroy = async (id: string): Promise<void> => {
  await deleteDoc(doc(db, 'transactions', id))
}