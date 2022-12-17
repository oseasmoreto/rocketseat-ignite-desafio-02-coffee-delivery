import { CardCoffee } from '../../components/CardCoffee'
import { Intro } from './components/Intro'
import { HomeContainer } from './styles'

import listCoffess from '../../data/coffee/list.json'

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <div className="content-home">
        <div className="container">
          <h2>Nossos cafés</h2>
          <div className="box-coffees">
            {listCoffess.map((item) => {
              return <CardCoffee item={item} key={item.id} />
            })}
          </div>
        </div>
      </div>
    </HomeContainer>
  )
}
