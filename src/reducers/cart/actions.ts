import { Client, Item, PaymentType } from '../../types/cart'

export enum ActionTypes {
  ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  UPDATE_PRODUCT = 'UPDATE_PRODUCT',
  UPDATE_AMOUNT_CART = 'UPDATE_AMOUNT_CART',
  ADD_CLIENT_CART = 'ADD_CLIENT_CART',
  ADD_PAYMENT_CART = 'ADD_PAYMENT_CART',
  CLEAR_CART = 'CLEAR_CART',
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

export function addClientToCartAction(client: Client) {
  return {
    type: ActionTypes.ADD_CLIENT_CART,
    payload: {
      client,
    },
  }
}

export function addPaymentToCartAction(payment: PaymentType) {
  return {
    type: ActionTypes.ADD_PAYMENT_CART,
    payload: {
      payment,
    },
  }
}

export function clearCartAction() {
  return {
    type: ActionTypes.CLEAR_CART,
  }
}
