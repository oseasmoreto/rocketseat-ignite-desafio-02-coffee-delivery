import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { InputQuantityContainer } from './styles'

interface InputQuantityProps {
  addQuantity: (quantity: number) => void
}

export function InputQuantity({ addQuantity }: InputQuantityProps) {
  const [quantity, setQuantity] = useState<number>(1)

  function handleQuantity(type: 'sub' | 'add'): void {
    let qtd = quantity

    switch (type) {
      case 'sub':
        if (qtd > 1) qtd -= 1
        break
      case 'add':
        qtd += 1
        break
    }

    addQuantity(qtd)
    setQuantity(qtd)
  }

  return (
    <InputQuantityContainer>
      <button onClick={() => handleQuantity('sub')}>
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <input
        type="text"
        min="1"
        defaultValue={quantity}
        value={quantity}
        onBlur={(e) => setQuantity(parseInt(e.target.value))}
      />
      <button onClick={() => handleQuantity('add')}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </InputQuantityContainer>
  )
}
