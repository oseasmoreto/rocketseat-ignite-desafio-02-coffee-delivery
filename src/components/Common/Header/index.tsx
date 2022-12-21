import { HeaderContainer, Notification } from './styles'
import LogoDeliveryCoffee from '../../../assets/images/logo.png'
import { ButtonCart } from '../ButtonCart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../../contexts/CartContext'
import { useContext } from 'react'

export function Header() {
  const { items, client } = useContext(CartContext)
  const totalCart = items.length
  const activeCart = totalCart > 0

  return (
    <HeaderContainer>
      <div className="content">
        <NavLink to="/">
          <img src={LogoDeliveryCoffee} alt="Delivery Coffee" />
        </NavLink>
        <div className="box-location">
          <div className="location">
            <FontAwesomeIcon fontSize={18} icon={faLocationDot} /> {client.city}
            ,{client.state}
          </div>
          <NavLink to="/cart" className="box-button">
            <ButtonCart variant="default" />
            {activeCart && <Notification>{totalCart}</Notification>}
          </NavLink>
        </div>
      </div>
    </HeaderContainer>
  )
}
