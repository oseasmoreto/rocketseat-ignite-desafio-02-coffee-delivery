import { HeaderContainer, Notification } from './styles'
import LogoDeliveryCoffee from '../../../assets/images/logo.png'
import { ButtonCart } from '../ButtonCart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { NavLink, useLocation } from 'react-router-dom'

export function Header() {
  const location = useLocation()
  const activeCart = location.pathname === '/cart'

  return (
    <HeaderContainer>
      <div className="content">
        <NavLink to="/">
          <img src={LogoDeliveryCoffee} alt="Delivery Coffee" />
        </NavLink>
        <div className="box-location">
          <div className="location">
            <FontAwesomeIcon fontSize={18} icon={faLocationDot} /> Porto Alegre,
            RG
          </div>
          <NavLink to="/cart" className="box-button">
            <ButtonCart variant="default" />
            {activeCart && <Notification>1</Notification>}
          </NavLink>
        </div>
      </div>
    </HeaderContainer>
  )
}
