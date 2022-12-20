import { createContext, ReactNode, useEffect, useReducer } from 'react'
import {
  addProductToCartAction,
  removeProductToCartAction,
  updateAmountCartAction,
  updateProductToCartAction,
} from '../reducers/cart/actions'
import { cartReducer } from '../reducers/cart/reducer'
import { Cart, Item } from '../types/cart'
interface CartContextType extends Cart {
  addProductCart: (item: Item) => void
  removeProductCart: (item: Item) => void
  updateProductCart: (item: Item, quantity: number) => void
  updateAmountCart: () => void
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
      client: {},
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
        client: null,
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
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
