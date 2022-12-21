import { createContext, ReactNode, useEffect, useReducer } from 'react'
import {
  addClientToCartAction,
  addPaymentToCartAction,
  addProductToCartAction,
  clearCartAction,
  removeProductToCartAction,
  updateAmountCartAction,
  updateProductToCartAction,
} from '../reducers/cart/actions'
import { cartReducer } from '../reducers/cart/reducer'
import { Cart, Client, Item, PaymentType } from '../types/cart'
interface CartContextType extends Cart {
  addProductCart: (item: Item) => void
  removeProductCart: (item: Item) => void
  updateProductCart: (item: Item, quantity: number) => void
  updateAmountCart: () => void
  addClientCart: (client: Client) => void
  addPaymentToCart: (payment: PaymentType) => void
  clearCart: () => void
}

interface CartContextProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      items: [],
      client: {
        zipcode: '',
        address: '',
        number: '',
        neighbourhood: '',
        complement: '',
        city: '',
        state: '',
      },
      payment: null,
      price: {
        delivery: 0,
        items: 0,
        amount: 0,
      },
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (storedStateAsJSON !== null) {
        return JSON.parse(storedStateAsJSON)
      }

      return {
        items: [],
        client: {
          zipcode: '',
          address: '',
          number: '',
          neighbourhood: '',
          complement: '',
          city: '',
          state: '',
        },
        payment: null,
        price: {
          delivery: 0,
          items: 0,
          amount: 0,
        },
      }
    },
  )
  const { items, client, payment, price } = cartState

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [cartState])

  function addProductCart(item: Item) {
    dispatch(addProductToCartAction(item))
    dispatch(updateAmountCart())
  }

  function removeProductCart(item: Item) {
    dispatch(removeProductToCartAction(item))
    dispatch(updateAmountCart())
  }

  function updateProductCart(item: Item, quantity: number) {
    dispatch(updateProductToCartAction(item, quantity))
    dispatch(updateAmountCart())
  }

  function updateAmountCart() {
    dispatch(updateAmountCartAction())
  }

  function addClientCart(client: Client) {
    dispatch(addClientToCartAction(client))
    dispatch(updateAmountCart())
  }

  function addPaymentToCart(payment: PaymentType) {
    dispatch(addPaymentToCartAction(payment))
  }

  function clearCart() {
    dispatch(clearCartAction())
  }

  return (
    <CartContext.Provider
      value={{
        items,
        client,
        payment,
        price,
        addProductCart,
        removeProductCart,
        updateProductCart,
        updateAmountCart,
        addClientCart,
        addPaymentToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
