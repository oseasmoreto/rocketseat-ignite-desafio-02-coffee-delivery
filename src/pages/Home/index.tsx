import { CardCoffee } from '../../components/CardCoffee'
import { Intro } from './components/Intro'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <div className="content-home">
        <div className="container">
          <h2>Nossos cafés</h2>
          <div className="box-coffees">
            <CardCoffee />
          </div>
        </div>
      </div>
    </HomeContainer>
  )
}
