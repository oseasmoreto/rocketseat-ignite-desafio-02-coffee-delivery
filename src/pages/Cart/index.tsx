import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useContext, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Item } from '../../components/Cart/Item'
import { CartContext } from '../../contexts/CartContext'
import { Block, ButtonConfirm, ButtonPayment, CartContainer } from './styles'

import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { PaymentType } from '../../types/cart'
import { addPaymentToCartAction } from '../../reducers/cart/actions'

const newClientFormValidationSchema = zod.object({
  zipcode: zod.string().min(8, 'Informe o CEP.').max(8, 'Informe o CEP.'),
  address: zod.string().min(5, 'Informe a Rua.'),
  number: zod.string().min(3, 'Informe o número.'),
  neighbourhood: zod.string().min(3, 'Informe o bairro.'),
  complement: zod.string().nullable(),
  city: zod.string().min(3, 'Informe a cidade.'),
  state: zod.string().min(2, 'Informe o UF.').max(2, 'Informe o UF'),
})

type NewClientFormData = zod.infer<typeof newClientFormValidationSchema>

export function Cart() {
  const {
    items,
    price,
    client,
    payment,
    addClientCart,
    addPaymentToCart,
    clearCart,
  } = useContext(CartContext)

  const navigate = useNavigate()

  const newClientForm = useForm<NewClientFormData>({
    resolver: zodResolver(newClientFormValidationSchema),
    defaultValues: {
      zipcode: client.zipcode,
      address: client.address,
      number: client.number,
      neighbourhood: client.neighbourhood,
      complement: client.complement,
      city: client.city,
      state: client.state,
    },
  })

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = newClientForm

  function handleAddAddressClient(data: NewClientFormData) {
    addClientCart(data)
    toast.success('Endereço salvo com sucesso!')
  }

  function handleAddPayment(payment: PaymentType) {
    addPaymentToCart(payment)
  }

  function handleCompleteToOrder() {
    clearCart()
    toast.success('Pedido realizado com sucesso!')
    navigate('/cart/complete')
  }

  useEffect(() => {
    if (errors === null) return

    const errorsValues = Object.values(errors)

    errorsValues.map((error) => {
      return toast.error(error.message)
    })
  }, [errors])

  if (items.length === 0)
    return (
      <CartContainer>
        <div className="box-info-client">
          <Block>
            <h4>Nenhum item em seu carrinho</h4>
            <NavLink className="link" to="/">
              Voltar para a listagem
            </NavLink>
          </Block>
        </div>
      </CartContainer>
    )
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
          <form onSubmit={handleSubmit(handleAddAddressClient)} action="">
            <div className="box-form">
              <input type="tel" {...register('zipcode')} placeholder="CEP" />
            </div>
            <div className="box-form one">
              <input type="text" {...register('address')} placeholder="Rua" />
            </div>

            <div className="box-form two">
              <input type="text" {...register('number')} placeholder="Número" />
              <input
                type="text"
                {...register('complement')}
                placeholder="Complemento"
              />
            </div>
            <div className="box-form tree">
              <input
                type="text"
                {...register('neighbourhood')}
                placeholder="Bairro"
              />
              <input type="text" {...register('city')} placeholder="Cidade" />
              <input type="text" {...register('state')} placeholder="UF" />
            </div>
            <ButtonConfirm>Salvar endereço</ButtonConfirm>
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
            <ButtonPayment
              className={payment === 'credit' ? 'active' : ''}
              onClick={() => handleAddPayment('credit')}
            >
              <CreditCard size={16} className="icon" /> Cartão de crédito
            </ButtonPayment>
            <ButtonPayment
              className={payment === 'debit' ? 'active' : ''}
              onClick={() => handleAddPayment('debit')}
            >
              <Bank size={16} className="icon" /> Cartão de débito
            </ButtonPayment>
            <ButtonPayment
              className={payment === 'money' ? 'active' : ''}
              onClick={() => handleAddPayment('money')}
            >
              <Money size={16} className="icon" /> Dinheiro
            </ButtonPayment>
          </div>
        </Block>
      </div>
      <aside className="box-info-order">
        <h4>Cafés selecionados</h4>
        <Block className="cart-itens">
          {items.map((item) => {
            return <Item key={item.id} item={item} />
          })}

          <div className="box-price">
            <p>
              Total de itens <span>R${price.items.toFixed(2)}</span>
            </p>
            <p>
              Entrega <span>R${price.delivery.toFixed(2)}</span>
            </p>
            <p>
              Total
              <span>R${price.amount.toFixed(2)}</span>
            </p>
          </div>
          <NavLink to="/cart/confirm">
            <ButtonConfirm onClick={handleCompleteToOrder}>
              Confirmar pedido
            </ButtonConfirm>
          </NavLink>
        </Block>
      </aside>
    </CartContainer>
  )
}
