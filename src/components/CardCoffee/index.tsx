import { ButtonCart } from '../Common/ButtonCart'
import { InputQuantify } from '../InputQuantify'
import { CardCoffeeContainer } from './styles'

export function CardCoffee() {
  return (
    <CardCoffeeContainer>
      <img
        src="/assets/images/coffees/expresso-tradicional.png"
        alt="Expresso Tradicional"
      />
      <div className="tags-box">
        <label htmlFor="">Tradicional</label>
      </div>
      <h5>Expresso Tradicional</h5>
      <p>O tradional café feito com água quente e grãos moídos</p>
      <div className="card-bottom">
        <span>
          <span className="sufix">R$</span> 9,00
        </span>
        <InputQuantify />
        <ButtonCart variant="primary-dark" />
      </div>
    </CardCoffeeContainer>
  )
}
