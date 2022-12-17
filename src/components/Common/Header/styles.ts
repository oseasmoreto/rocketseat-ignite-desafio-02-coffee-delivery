import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.background};
  max-width: 100%;
  padding: 0 1rem;

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

      .box-button {
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        text-decoration: none;
      }
    }
  }
`
export const Notification = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: -0.5rem;
  margin-left: -0.8rem;
  width: 20px;
  height: 20px;
  border-radius: 50%;

  background-color: ${(props) => props.theme.secondary.dark};

  color: ${(props) => props.theme.white};
  font-weight: bold;
  font-size: 12px;
  text-decoration: none;
`
