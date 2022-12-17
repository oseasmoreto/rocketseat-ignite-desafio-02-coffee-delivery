import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { InputQuantifyContainer } from './styles'

export function InputQuantify() {
  const [quantify, setQuantity] = useState<number>(1)

  function handleQuantify(type: 'sub' | 'add'): void {
    let qtd = quantify

    switch (type) {
      case 'sub':
        if (qtd > 1) qtd -= 1
        break
      case 'add':
        qtd += 1
        break
    }

    setQuantity(qtd)
  }

  return (
    <InputQuantifyContainer>
      <button onClick={() => handleQuantify('sub')}>
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <input
        type="text"
        min="1"
        defaultValue={quantify}
        value={quantify}
        onBlur={(e) => setQuantity(parseInt(e.target.value))}
      />
      <button onClick={() => handleQuantify('add')}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </InputQuantifyContainer>
  )
}
