import { Item } from '../../types/cart'

export enum ActionTypes {
  ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  UPDATE_PRODUCT = 'UPDATE_PRODUCT',
  UPDATE_AMOUNT_CART = 'UPDATE_AMOUNT_CART',
}

export function addProductToCartAction(item: Item) {
  return {
    type: ActionTypes.ADD_NEW_PRODUCT,
    payload: {
      item,
    },
  }
}

export function removeProductToCartAction(item: Item) {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: {
      item,
    },
  }
}

export function updateProductToCartAction(item: Item, quantity: number) {
  return {
    type: ActionTypes.UPDATE_PRODUCT,
    payload: {
      item,
      quantity,
    },
  }
}

export function updateAmountCartAction() {
  return {
    type: ActionTypes.UPDATE_AMOUNT_CART,
  }
}
