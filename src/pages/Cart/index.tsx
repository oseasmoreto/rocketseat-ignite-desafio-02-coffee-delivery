import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { Item } from '../../components/Cart/Item'
import { Block, ButtonConfirm, ButtonPayment, CartContainer } from './styles'

export function Cart() {
  return (
    <CartContainer>
      <div className="box-info-client">
        <h4>Complete seu pedido</h4>
        <Block className="address">
          <div className="header">
            <MapPinLine size={22} className="icon-address" />
            <p>
              Endereço de Entrega
              <br />
              <small>Informe o endereço onde deseja recerber o pedido</small>
            </p>
          </div>
          <form action="">
            <div className="box-form">
              <input type="tel" name="zipcod" placeholder="CEP" />
            </div>
            <div className="box-form one">
              <input type="text" name="address" placeholder="Rua" />
            </div>

            <div className="box-form two">
              <input type="text" name="number" placeholder="Número" />
              <input type="text" name="complement" placeholder="Complemento" />
            </div>
            <div className="box-form tree">
              <input type="text" name="bairro" placeholder="Bairro" />
              <input type="text" name="city" placeholder="Cidade" />
              <input type="text" name="uf" placeholder="UF" />
            </div>
          </form>
        </Block>
        <Block className="payment">
          <div className="header">
            <CurrencyDollar size={22} className="icon-payment" />
            <p>
              Pagmento
              <br />
              <small>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </small>
            </p>
          </div>
          <div className="box-button">
            <ButtonPayment>
              <CreditCard size={16} className="icon" /> Cartão de crédito
            </ButtonPayment>
            <ButtonPayment>
              <Bank size={16} className="icon" /> Cartão de débito
            </ButtonPayment>
            <ButtonPayment>
              <Money size={16} className="icon" /> Dinheiro
            </ButtonPayment>
          </div>
        </Block>
      </div>
      <aside className="box-info-order">
        <h4>Cafés selecionados</h4>
        <Block className="cart-itens">
          <Item />
          <Item />
          <div className="box-price">
            <p>
              Total de itens <span>R$29,70</span>
            </p>
            <p>
              Entrega <span>R$3,50</span>
            </p>
            <p>
              Total
              <span>R$33,20</span>
            </p>
          </div>
          <NavLink to="/cart/confirm">
            <ButtonConfirm>Confirmar pedido</ButtonConfirm>
          </NavLink>
        </Block>
      </aside>
    </CartContainer>
  )
}
