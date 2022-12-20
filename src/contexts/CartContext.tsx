import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { addProductToCartAction } from '../reducers/cart/actions'
import { cartReducer } from '../reducers/cart/reducer'
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
    cartReducer,
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
  const { items, client, payment, price } = cartState

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [cartState])

  function addProductCart(item: Item) {
    dispatch(addProductToCartAction(item))
  }

  return (
    <CartContext.Provider
      value={{ items, client, payment, price, addProductCart }}
    >
      {children}
    </CartContext.Provider>
  )
}