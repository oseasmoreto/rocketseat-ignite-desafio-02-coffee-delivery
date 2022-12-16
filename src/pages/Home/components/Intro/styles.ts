import styled, { css } from 'styled-components'
import BgIntro from '../../../../assets/images/bg-intro.png'

export const IntroContainer = styled.div`
  background-image: url(${BgIntro});
  background-position: bottom;
  background-size: cover;

  max-width: 100%;
  height: 544px;

  padding: 0 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    display: flex;
    justify-content: space-between;
    width: 74rem;

    .box-content {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      h2 {
        font-family: Baloo2-ExtraBold;
        font-weight: 900;
        font-size: 48px;
        line-height: 130%;
        color: ${(props) => props.theme.title};
      }

      p {
        font-size: 20px;
        line-height: 130%;
        color: ${(props) => props.theme.subtitle};
      }

      ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: 3rem;
        list-style: none;

        li {
          display: flex;
          align-items: center;
          gap: 0.5rem;

          margin-bottom: 1.25rem;
          font-size: 1rem;
          color: ${(props) => props.theme.text};
        }
      }
    }

    @media (max-width: 1024px) {
      flex-direction: column-reverse;
      padding: 1rem;
      max-width: 100%;

      .box-content {
        h2 {
          font-size: 2rem;
          line-height: 100%;
          margin-top: 1rem;
        }
        ul {
          display: grid;
          grid-template-columns: 1fr;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    height: auto;
  }
`

export type IntroDotVariant = 'default' | 'primary' | 'secondary' | 'dark'

interface IntroDotContainerProps {
  variant: IntroDotVariant
}

export const IntroDot = styled.div<IntroDotContainerProps>`
  color: ${(props) => props.theme.white};

  width: 2rem;
  height: 2rem;

  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  ${(propsC) => {
    switch (propsC.variant) {
      case 'primary':
        return css`
          background-color: ${(props) => props.theme.primary.normal};
        `
      case 'secondary':
        return css`
          background-color: ${(props) => props.theme.secondary.normal};
        `
      case 'dark':
        return css`
          background-color: ${(props) => props.theme.title};
        `
      default:
        return css`
          background-color: ${(props) => props.theme.secondary.dark};
        `
    }
  }};
`
