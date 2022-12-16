import styled, { css } from 'styled-components'

export type ButtonVariant = 'default' | 'primary-dark'

interface ButtonContainerProps {
  variant: ButtonVariant
}

export const ButtonCartContainer = styled.button<ButtonContainerProps>`
  border-radius: 6px;
  border: 0;
  width: 2.375rem;
  height: 2.375rem;
  cursor: pointer;

  transition: all 0.2s;

  ${(propsC) => {
    if (propsC.variant === 'primary-dark') {
      return css`
        background-color: ${(props) => props.theme.primary.dark};
        color: ${(props) => props.theme.white};
        &:hover {
          background-color: ${(props) => props.theme.primary.normal};
          color: ${(props) => props.theme.white};
        }
      `
    }
    if (propsC.variant === 'default') {
      return css`
        background-color: ${(props) => props.theme.secondary.light};
        color: ${(props) => props.theme.secondary.dark};
        &:hover {
          background-color: ${(props) => props.theme.secondary.dark};
          color: ${(props) => props.theme.secondary.light};
        }
      `
    }
  }};
`
