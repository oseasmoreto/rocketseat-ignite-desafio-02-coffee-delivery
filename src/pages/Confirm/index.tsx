import { ConfirmContainer, ConfirmDot } from './styles'
import ImgMotoca from '../../assets/images/motoca.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { CurrencyDollar } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { PaymentType } from '../../types/cart'

export function Confirm() {
  const { client, payment } = useContext(CartContext)

  function getLabelPayment(payment: PaymentType): string {
    switch (payment) {
      case 'credit':
        return 'Cartão de Crédito'
      case 'debit':
        return 'Cartão de Débito'
      case 'money':
        return 'Dinheiro'

      default:
        return 'Não Encontrado'
    }
  }
  return (
    <ConfirmContainer>
      <div className="box-confirm">
        <div className="header">
          <h3>Uhu! Pedido Confirmado</h3>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </div>
        <div className="box-info">
          <ul>
            <li>
              <ConfirmDot variant="primary">
                <FontAwesomeIcon fontSize={16} icon={faLocationDot} />
              </ConfirmDot>
              <p>
                Entrega em{' '}
                <span>
                  Rua {client.address}, {client.number}
                </span>{' '}
                {client.neighbourhood}- {client.city}, {client.state}
              </p>
            </li>
            <li>
              <ConfirmDot variant="secondary">
                <FontAwesomeIcon fontSize={16} icon={faClock} />
              </ConfirmDot>
              <p>
                Previsão de entrega
                <br />
                <span>20 min - 30 min</span>
              </p>
            </li>
            <li>
              <ConfirmDot variant="secondary-dark">
                <CurrencyDollar size={16} />
              </ConfirmDot>
              <p>
                Pagamento na entrega
                <br />
                <span>{getLabelPayment(payment)}</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <img src={ImgMotoca} alt="Motoca" />
    </ConfirmContainer>
  )
}
