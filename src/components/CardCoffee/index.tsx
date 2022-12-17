import { ButtonCart } from '../Common/ButtonCart'
import { InputQuantify } from '../InputQuantify'
import { CardCoffeeContainer } from './styles'

import { Coffee } from '../../types/coffee'

interface CardCoffeeProps {
  item: Coffee
}

export function CardCoffee({ item }: CardCoffeeProps) {
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
        <InputQuantify />
        <ButtonCart variant="primary-dark" />
      </div>
    </CardCoffeeContainer>
  )
}
