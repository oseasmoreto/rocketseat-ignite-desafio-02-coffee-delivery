import styled from 'styled-components'

export const HomeContainer = styled.main`
  .content-home {
    display: flex;
    justify-content: center;

    width: 100%;
    padding: 0 1rem;

    .container {
      width: 74rem;

      h2 {
        font-family: Baloo2-ExtraBold;
        font-size: 2rem;
        color: ${(props) => props.theme.subtitle};
      }

      .box-coffees {
        margin-top: 3rem;
      }
    }
  }
`
