import styled from 'styled-components'

export const CartContainer = styled.main`
  width: 74rem;
  height: 100vh;
  display: grid;
  grid-template-columns: 640px 448px;
  gap: 2rem;
  justify-content: space-between;
  align-self: center;

  margin-top: 2rem;
  padding: 1rem;

  h4 {
    font-family: Baloo2-SemiBold;
    font-size: 18px;
    line-height: 1.3;
    color: ${(props) => props.theme.subtitle};
    margin-bottom: 1rem;
  }

  .address {
    p {
      color: ${(props) => props.theme.subtitle};
      font-size: 1rem;
      line-height: 1.3;

      small {
        color: ${(props) => props.theme.text};
        font-size: 14;
      }
    }
    .icon-address {
      color: ${(props) => props.theme.secondary.dark};
    }

    form {
      margin-top: 2rem;
      .box-form {
        display: flex;
        justify-content: flex-start;
        gap: 1rem;
        margin-bottom: 1rem;

        input {
          width: 200px;
          height: 42px;
          background-color: ${(props) => props.theme.input};
          border: 1px solid ${(props) => props.theme.button};
          padding: 0.5rem;
          border-radius: 6px;
          color: ${(props) => props.theme.text};
          font-size: 14px;

          &::placeholder {
            color: ${(props) => props.theme.label};
          }
        }
      }

      .one {
        input {
          width: 100%;
        }
      }

      .two {
        display: grid;
        grid-template-columns: 200px 1fr;

        input {
          width: 100%;
        }
      }

      .tree {
        display: grid;
        grid-template-columns: 200px 1fr 60px;

        input {
          width: 100%;
        }
      }
    }
  }

  .payment {
    .icon-payment {
      color: ${(props) => props.theme.primary.normal};
    }

    .box-button {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
    grid-template-columns: 1fr;
    padding: 1rem;

    .address {
      max-width: 100%;

      form {
        margin-top: 2rem;
        .box-form {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1rem;

          input {
            width: 100%;
          }
        }
      }
    }

    .payment {
      max-width: 100%;
      .box-button {
        max-width: 100%;
        flex-direction: column;
        gap: 0.5rem;
      }
    }
  }
`

export const Block = styled.div`
  background-color: ${(props) => props.theme.card};
  width: 100%;
  padding: 2rem;
  border-radius: 6px;
  margin-bottom: 1rem;

  .header {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
`
export const ButtonPayment = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  padding: 0.75rem;
  cursor: pointer;

  width: 178.87px;
  height: 51px;
  border: 1px solid transparent;
  border-radius: 6px;
  background-color: ${(props) => props.theme.button};

  font-size: 12px;
  text-transform: uppercase;
  color: ${(props) => props.theme.text};

  .icon {
    color: ${(props) => props.theme.primary.normal};
  }

  transition: all 0.2s;

  &:hover,
  &:focus,
  &:active {
    background-color: ${(props) => props.theme.primary.light};
    border: 1px solid ${(props) => props.theme.primary.normal};
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`
