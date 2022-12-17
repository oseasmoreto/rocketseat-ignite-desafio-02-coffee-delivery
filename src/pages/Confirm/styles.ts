import styled, { css } from 'styled-components'

export const ConfirmContainer = styled.main`
  width: 74rem;
  display: grid;
  grid-template-columns: 526px 492px;
  gap: 2rem;
  justify-content: space-between;
  align-self: center;

  margin-top: 2rem;
  padding: 1rem;

  .header {
    margin-bottom: 2rem;

    h3 {
      font-size: 2rem;
      font-family: Baloo2-SemiBold;
      line-height: 1.3;
      color: ${(props) => props.theme.secondary.dark};
    }

    p {
      font-size: 20px;
      color: ${(props) => props.theme.subtitle};
    }
  }

  .box-info {
    padding: 3rem;
    //border: 1px solid ${(props) => props.theme.secondary.normal};
    /*border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;*/
    border-radius: 6px;
    background-image: radial-gradient(
        circle at 100% 100%,
        transparent 6px,
        ${(props) => props.theme.secondary.normal} 6px,
        ${(props) => props.theme.secondary.normal} 6px,
        transparent 7px
      ),
      linear-gradient(
        to right,
        ${(props) => props.theme.secondary.normal},
        ${(props) => props.theme.secondary.normal}
      ),
      radial-gradient(
        circle at 0% 100%,
        transparent 6px,
        ${(props) => props.theme.secondary.normal} 6px,
        ${(props) => props.theme.secondary.normal} 7px,
        transparent 6px
      ),
      linear-gradient(
        to bottom,
        ${(props) => props.theme.secondary.normal},
        ${(props) => props.theme.primary.normal}
      ),
      radial-gradient(
        circle at 0% 0%,
        transparent 6px,
        ${(props) => props.theme.primary.normal} 6px,
        ${(props) => props.theme.primary.normal} 7px,
        transparent 7px
      ),
      linear-gradient(
        to left,
        ${(props) => props.theme.primary.normal},
        ${(props) => props.theme.primary.normal}
      ),
      radial-gradient(
        circle at 100% 0%,
        transparent 6px,
        ${(props) => props.theme.primary.normal} 6px,
        ${(props) => props.theme.primary.normal} 7px,
        transparent 7px
      ),
      linear-gradient(
        to top,
        ${(props) => props.theme.primary.normal},
        ${(props) => props.theme.secondary.normal}
      );
    background-size: 7px 7px, calc(100% - 14px) 1px, 7px 7px,
      1px calc(100% - 14px);
    background-position: top left, top center, top right, center right,
      bottom right, bottom center, bottom left, center left;
    background-repeat: no-repeat;

    ul {
      list-style: none;

      li {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 1rem;

        p {
          color: ${(props) => props.theme.text};
          font-size: 1rem;
          max-width: 310px;

          span {
            color: ${(props) => props.theme.text};
            font-weight: bold;
          }
        }
      }

      li + li {
        margin-top: 2rem;
      }
    }
  }

  img {
    align-self: flex-end;
  }
`

export type ConfirmDotVariant = 'primary' | 'secondary' | 'secondary-dark'

interface ConfirmDotContainerProps {
  variant: ConfirmDotVariant
}

export const ConfirmDot = styled.div<ConfirmDotContainerProps>`
  color: ${(props) => props.theme.white};

  min-width: 2rem;
  min-height: 2rem;

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
      case 'secondary-dark':
      default:
        return css`
          background-color: ${(props) => props.theme.secondary.dark};
        `
    }
  }};
`
