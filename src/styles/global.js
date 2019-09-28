import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=PT+Sans:400,700&display=swap');
  ${normalize}

  * {
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body, input, button {
    font-family: 'PT Sans', sans-serif;
    color: #888;
    font-size: 0.9rem;
    line-height: 1.5;
    font-weight: 400; 
    background: #f4f4f4;
  }

  a {
    text-decoration: none;
    transition: all 150ms linear 0s;
    color: #000;
  }

  h1, h2, h3, h4 {
    letter-spacing: 0.5px
  }


  img {
    max-width: 100%;
  }

  :root {
    --primary: #8854d0;
    --secondary: #7e4cc3;
  }
`;
