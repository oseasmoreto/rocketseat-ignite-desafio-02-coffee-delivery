import styled from 'styled-components'

export const InputQuantifyContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  min-width: 72px;
  height: 38px;
  background-color: ${(props) => props.theme.input};

  padding: 0 0.5rem;

  border: 6px;

  input {
    border: 0;
    background: none;
    max-width: 20px;
    height: auto;
    outline: none;
    color: ${(props) => props.theme.title};
    font-size: 14px;
    text-align: center;

    &:focus {
      outline: 0;
      box-shadow: none;
    }
  }

  button {
    border: 0;
    background: none;
    color: ${(props) => props.theme.primary.dark};
    font-size: 14px;
    cursor: pointer;

    &:focus {
      outline: 0;
      box-shadow: none;
    }
  }
`
