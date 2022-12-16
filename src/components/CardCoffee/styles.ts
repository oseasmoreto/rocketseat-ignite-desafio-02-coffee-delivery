import styled from 'styled-components'

export const CardCoffeeContainer = styled.div`
  background-color: ${(props) => props.theme.card};
  width: 256px;
  min-height: 310px;

  border-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;

  padding: 1rem;
  padding-top: 0;

  margin-bottom: 2rem;

  img {
    max-width: 120px;
    margin-top: -20px;
  }

  .tags-box {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
    margin: 0.5rem 0;

    label {
      background-color: ${(props) => props.theme.secondary.light};
      color: ${(props) => props.theme.secondary.dark};
      text-transform: uppercase;
      font-size: 10px;

      height: 21px;
      text-align: center;
      padding: 5px 8px;

      border-radius: 20px;
    }
  }

  h5 {
    font-family: Baloo2-SemiBold;
    font-size: 20px;
    color: ${(props) => props.theme.title};
    line-height: 1.3;
  }

  p {
    font-family: 'Roboto';
    font-size: 14px;
    color: ${(props) => props.theme.label};
    line-height: 1.3;
    text-align: center;
  }

  .card-bottom {
    display: flex;
    justify-content: space-around;
    align-self: flex-end;
    margin-top: 1rem;
    width: 100%;

    span {
      font-family: Baloo2-SemiBold;
      font-weight: 900;
      color: ${(props) => props.theme.text};
      font-size: 24px;
      line-height: 1.3;

      .sufix {
        font-family: 'Roboto';
        font-weight: normal;
        font-size: 14px;
      }
    }
  }
`
