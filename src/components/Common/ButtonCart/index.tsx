import React from 'react'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { ButtonCartContainer, ButtonVariant } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

export function ButtonCart({ variant = 'default', ...rest }: ButtonProps) {
  return (
    <ButtonCartContainer variant={variant} {...rest}>
      <FontAwesomeIcon fontSize={18} icon={faCartShopping} />
    </ButtonCartContainer>
  )
}
