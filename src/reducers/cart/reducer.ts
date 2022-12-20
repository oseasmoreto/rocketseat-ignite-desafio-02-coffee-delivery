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
    default:
      return state
  }
}
