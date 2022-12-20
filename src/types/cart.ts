import { Coffee } from './coffee'

export type Item = Coffee & {
  quantity: number
}
export type Items = Item[]

export type Client = {
  cep: string
  address: string
  number: string
  neighbourhood: string
  state: string
  complement?: string
}

export type Payment = {
  method: 'credit' | 'debit' | 'money' | null
}

export type Cart = {
  items: Items
  client: Client
  payment: Payment
  price: {
    delivery: number
    items: number
    amount: number
  }
}
