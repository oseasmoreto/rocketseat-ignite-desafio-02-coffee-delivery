import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { InputQuantifyContainer } from './styles'

export function InputQuantify() {
  return (
    <InputQuantifyContainer>
      <button>
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <input type="text" min="1" value="1" />
      <button>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </InputQuantifyContainer>
  )
}
