import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.background};

  .content {
    width: 74rem;
    height: 6.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      max-height: 40px;
    }

    .box-location {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.5rem;

      .location {
        display: flex;
        justify-content: space-around;
        align-items: center;

        height: 38px;
        width: 143px;

        padding: 0.5rem;

        border-radius: 6px;

        background-color: ${(props) => props.theme.primary.light};
        color: ${(props) => props.theme.primary.dark};
        font-size: 14px;
      }
    }
  }
`
