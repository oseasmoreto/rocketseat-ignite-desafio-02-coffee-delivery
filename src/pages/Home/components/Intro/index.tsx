import { IntroContainer, IntroDot } from './styles'
import ImgIntroHome from '../../../../assets/images/home-intro.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBox,
  faCartShopping,
  faMugHot,
} from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'

export function Intro() {
  return (
    <IntroContainer>
      <div className="content">
        <div className="box-content">
          <h2>Encontre o café perfeito para qualquer hora do dia</h2>
          <p>
            Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <ul>
            <li>
              <IntroDot variant="default">
                <FontAwesomeIcon fontSize={13} icon={faCartShopping} />
              </IntroDot>{' '}
              Compra simples e segura
            </li>
            <li>
              <IntroDot variant="dark">
                <FontAwesomeIcon fontSize={13} icon={faBox} />
              </IntroDot>{' '}
              Embalagem mantém o café intacto
            </li>
            <li>
              <IntroDot variant="secondary">
                <FontAwesomeIcon fontSize={13} icon={faClock} />
              </IntroDot>{' '}
              Entrega rápida e rastreada
            </li>
            <li>
              <IntroDot variant="primary">
                <FontAwesomeIcon fontSize={13} icon={faMugHot} />
              </IntroDot>{' '}
              O café chega fresquinho até você
            </li>
          </ul>
        </div>
        <img src={ImgIntroHome} alt="Copão de café top" />
      </div>
    </IntroContainer>
  )
}
