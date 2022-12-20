import { createContext, ReactNode, useReducer } from 'react'
import { Cart, Item } from '../types/cart'

interface CartContextType extends Cart {
  addProductCart: (item: Item) => void
}

interface CartContextProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProps) {
  const [cartState, dispatch] = useReducer(
    (state: any, action: any) => {
      return state
    },
    {
      items: [],
      client: {},
      payment: null,
      price: {},
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
      }
    },
  )

  function addProductCart(item: Item) {
    console.log(item)
  }

  const { items, client, payment, price } = cartState
  return (
    <CartContext.Provider
      value={{ items, client, payment, price, addProductCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
