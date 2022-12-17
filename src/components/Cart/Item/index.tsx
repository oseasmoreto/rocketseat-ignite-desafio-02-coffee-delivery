import { Trash } from 'phosphor-react'
import { InputQuantify } from '../../InputQuantify'
import { ButtonRemove, ItemContainer } from './styles'

export function Item() {
  return (
    <ItemContainer>
      <div className="box-img">
        <img
          src="/assets/images/coffees/expresso-tradicional.png"
          alt="Expresso Tradicional"
        />
      </div>
      <div className="box-info">
        <p>
          Expresso Tradicional <span>R$ 9,90</span>
        </p>
        <div className="actions">
          <InputQuantify />
          <ButtonRemove>
            <Trash size={16} className="icon" /> Remover
          </ButtonRemove>
        </div>
      </div>
    </ItemContainer>
  )
}
