import { HeaderContainer } from './styles'
import LogoDeliveryCoffee from '../../../assets/images/logo.png'
import { ButtonCart } from '../ButtonCart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export function Header() {
  return (
    <HeaderContainer>
      <div className="content">
        <img src={LogoDeliveryCoffee} alt="Delivery Coffee" />
        <div className="box-location">
          <div className="location">
            <FontAwesomeIcon fontSize={18} icon={faLocationDot} /> Porto Alegre,
            RG
          </div>
          <ButtonCart variant="default" />
        </div>
      </div>
    </HeaderContainer>
  )
}
