import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Arimo:wght@400;600&display=swap');

  :root {
    --black: #151515;
    --yellow: #fcf185;
    --lightGray: #bfbfbf;
    --white: #fff;

  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  body {
    font-family: 'Arimo', sans-serif;
    background-color: var(--black);
    color: var(--white);
  }
`;

const Main = styled('main')`
  max-width: 1200px;
  margin: 0 auto;
`

export {
  GlobalStyle,
  Main
}