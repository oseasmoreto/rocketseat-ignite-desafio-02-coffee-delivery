import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Baloo2-Bold;
    src: url('/assets/fonts/Baloo2-Bold.ttf');
  }
  @font-face {
    font-family: Baloo2-ExtraBold;
    src: url('/assets/fonts/baloo-2/Baloo2-ExtraBold.ttf');
  }
  @font-face {
    font-family: Baloo2-Medium;
    src: url('/assets/fonts/baloo-2/Baloo2-Medium.ttf');
  }
  @font-face {
    font-family: Baloo2-Regular;
    src: url('/assets/fonts/baloo-2/Baloo2-Regular.ttf');
  }
  @font-face {
    font-family: Baloo2-SemiBold;
    src: url('/assets/fonts/baloo-2/Baloo2-SemiBold.ttf');
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.primary.light};
  }

  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    -webkit-font-smoothing: antialiased
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
