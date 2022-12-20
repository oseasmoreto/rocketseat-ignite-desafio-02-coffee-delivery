import { ActionTypes } from './actions'
import { produce } from 'immer'
import { Cart } from '../../types/cart'

interface CartState extends Cart {}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_PRODUCT: {
      const product = state.items.findIndex((item) => {
        return item.id === action.payload.item
      })

      if (product < 0) return state

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
    default:
      return state
  }
}
