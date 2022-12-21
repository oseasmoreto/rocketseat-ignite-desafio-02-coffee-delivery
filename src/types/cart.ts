import { Coffee } from './coffee'

export type Item = Coffee & {
  quantity: number
}
export type Items = Item[]

export type Client = {
  zipcode: string
  address: string
  number: string
  neighbourhood: string
  state: string
  city: string
  complement: string | null
}

export type PaymentType = 'credit' | 'debit' | 'money' | null

export type Payment = {
  method: PaymentType
}

export type Cart = {
  items: Items
  client: Client
  payment: PaymentType
  price: {
    delivery: number
    items: number
    amount: number
  }
}
