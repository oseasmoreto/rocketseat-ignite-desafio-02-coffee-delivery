import { ButtonCart } from '../Common/ButtonCart'
import { CardCoffeeContainer } from './styles'

import { Coffee } from '../../types/coffee'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { InputQuantity } from '../InputQuantity'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface CardCoffeeProps {
  item: Coffee
}

export function CardCoffee({ item }: CardCoffeeProps) {
  const { addProductCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState<number>(1)

  function handdleSetQuantity(quantity: number) {
    setQuantity(quantity)
  }

  function sendProductToCart(coffee: Coffee) {
    const item = { ...coffee, quantity }
    addProductCart(item)
    toast.success('Produto adicionado com sucesso')
  }

  return (
    <CardCoffeeContainer>
      <img src={item.image} alt={item.name} />
      <div className="tags-box">
        {item.label.map((item) => {
          return (
            <label key={item} htmlFor="">
              {item}
            </label>
          )
        })}
      </div>
      <h5>{item.name}</h5>
      <p>{item.description}</p>
      <div className="card-bottom">
        <span>
          <span className="sufix">R$</span> {item.price.toFixed(2)}
        </span>
        <InputQuantity addQuantity={handdleSetQuantity} />
        <ButtonCart
          onClick={() => sendProductToCart(item)}
          variant="primary-dark"
        />
      </div>
    </CardCoffeeContainer>
  )
}
