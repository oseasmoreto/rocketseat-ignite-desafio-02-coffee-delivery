import { ActionTypes } from './actions'
import { produce } from 'immer'
import { Cart } from '../../types/cart'

interface CartState extends Cart {}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_PRODUCT:
      return produce(state, (draft) => {
        draft.items.push(action.payload.item)
      })
    case ActionTypes.REMOVE_PRODUCT: {
      const products = state.items.filter((item) => {
        return item.id !== action.payload.item.id
      })

      return produce(state, (draft) => {
        draft.items = products
      })
    }
    default:
      return state
  }
}
