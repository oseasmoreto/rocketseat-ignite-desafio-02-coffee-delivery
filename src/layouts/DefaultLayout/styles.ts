import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;

  background: ${(props) => props.theme.background};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`
