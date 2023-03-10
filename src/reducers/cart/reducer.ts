import { ActionTypes } from './actions'
import { produce } from 'immer'
import { Cart } from '../../types/cart'

interface CartState extends Cart {}

export function cartReducer(state: CartState, action: any) {
  if (action === undefined) return state

  switch (action.type) {
    case ActionTypes.ADD_NEW_PRODUCT: {
      const product = state.items.findIndex((item) => {
        return item.id === action.payload.item
      })

      if (product >= 0) return state

      return produce(state, (draft) => {
        draft.items.push(action.payload.item)
      })
    }
    case ActionTypes.REMOVE_PRODUCT: {
      const products = state.items.filter((item) => {
        return item.id !== action.payload.item.id
      })

      return produce(state, (draft) => {
        draft.items = products
      })
    }
    case ActionTypes.UPDATE_PRODUCT: {
      const product = state.items.findIndex((item) => {
        return item.id === action.payload.item.id
      })

      if (product < 0) return state

      return produce(state, (draft) => {
        draft.items[product].quantity = action.payload.quantity
      })
    }
    case ActionTypes.UPDATE_AMOUNT_CART: {
      const initialValue = 0

      const sumAllItens = state.items.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.price * currentValue.quantity,
        initialValue,
      )

      return produce(state, (draft) => {
        if (draft.client.zipcode.length > 0 && draft.price.delivery === 0) {
          const priceDelivery = generateRandomNumber()
          draft.price.delivery = priceDelivery
        }

        draft.price.items = sumAllItens
        draft.price.amount = draft.price.items + draft.price.delivery
      })
    }
    case ActionTypes.ADD_CLIENT_CART: {
      const priceDelivery = generateRandomNumber()
      return produce(state, (draft) => {
        draft.client = action.payload.client
        draft.price.delivery = priceDelivery
      })
    }
    case ActionTypes.ADD_PAYMENT_CART: {
      return produce(state, (draft) => {
        draft.payment = action.payload.payment
      })
    }
    case ActionTypes.CLEAR_CART: {
      return produce(state, (draft) => {
        draft.items = []
        draft.price.amount = 0
        draft.price.items = 0
      })
    }
    default:
      return state
  }
}

function generateRandomNumber(): number {
  const min = 0.02
  const max = 10.99
  const highlightedNumber = Math.random() * (max - min) + min
  return highlightedNumber
}
