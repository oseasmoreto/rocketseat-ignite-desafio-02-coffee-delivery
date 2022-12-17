import styled from 'styled-components'

export const ItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5rem;

  border-bottom: 1px solid ${(props) => props.theme.button};
  padding-bottom: 2rem;
  margin-bottom: 2rem;

  .box-img {
    img {
      max-width: 64px;
    }
  }

  .box-info {
    width: 100%;

    p {
      display: flex;
      justify-content: space-between;

      width: 100%;

      color: ${(props) => props.theme.subtitle};
      font-size: 1rem;
      line-height: 1.3;

      span {
        font-weight: bold;
        color: ${(props) => props.theme.text};
      }
    }

    .actions {
      display: flex;
      gap: 0.5rem;
      margin-top: 0.5rem;
    }
  }
`

export const ButtonRemove = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 91px;
  height: 38px;

  border: 0;
  border-radius: 6px;
  background-color: ${(props) => props.theme.button};

  cursor: pointer;

  font-size: 0.75rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.text};

  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.hover};
  }

  .icon {
    color: ${(props) => props.theme.primary.normal};
  }
`
