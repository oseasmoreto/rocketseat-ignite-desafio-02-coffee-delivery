import { Item } from '../../types/cart'

export enum ActionTypes {
  ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT',
}

export function addProductToCartAction(item: Item) {
  return {
    type: ActionTypes.ADD_NEW_PRODUCT,
    payload: {
      item,
    },
  }
}
