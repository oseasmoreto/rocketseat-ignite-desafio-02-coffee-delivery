import { Trash } from 'phosphor-react'
import { InputQuantity } from '../../InputQuantity'
import { ButtonRemove, ItemContainer } from './styles'
import { Item as ItemType } from '../../../types/cart'
import { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'

interface ItemProps {
  item: ItemType
}

export function Item({ item }: ItemProps) {
  const { removeProductCart } = useContext(CartContext)

  function handleQuantityItem(quantity: number) {}

  function handleDeleteProduct(item: ItemType) {
    removeProductCart(item)
  }
  return (
    <ItemContainer>
      <div className="box-img">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="box-info">
        <p>
          {item.name} <span>R$ {item.price.toFixed(2)}</span>
        </p>
        <div className="actions">
          <InputQuantity qtd={item.quantity} addQuantity={handleQuantityItem} />
          <ButtonRemove onClick={() => handleDeleteProduct(item)}>
            <Trash size={16} className="icon" /> Remover
          </ButtonRemove>
        </div>
      </div>
    </ItemContainer>
  )
}
