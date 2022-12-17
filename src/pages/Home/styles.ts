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
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        margin-top: 3rem;

        @media (max-width: 1024px) {
          justify-content: center;
          gap: 2rem;
        }
      }
    }
  }
`
