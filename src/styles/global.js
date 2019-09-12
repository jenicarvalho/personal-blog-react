import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Comfortaa:300,400,600&display=swap');
  ${normalize}

  * {
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body, input, button {
    font-family: 'Comfortaa', Helvetica, Sans-Serif;
    color: #444;
    font-size: 14px;
    line-height: 20px;
  }
  a {
    text-decoration: none;
    transition: all 150ms linear 0s;
  }
`;
