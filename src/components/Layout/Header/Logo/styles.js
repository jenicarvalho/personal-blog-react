import styled from "styled-components";
import { Link } from "react-router-dom";
import media from 'styled-media-query'

export const LogoWrapper = styled(Link)`
  @import url("https://fonts.googleapis.com/css?family=Comfortaa:400,700&display=swap");

  text-align: center;
  background: #fff;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Comfortaa", cursive;

  h1 {
    font-size: 30px;
    line-height: 20px;
    color: #000;
    font-weight: 700;
    margin-right: 20px;
    border-right: 1px solid #888;
    padding-right: 20px;
  }

  span {
    color: #888;
    display: inline-block;
    font-weight: 400;
  }

  ${media.lessThan("medium")`
    flex-direction: column;
    h1 { border: none }
  `}

  ${media.lessThan("small")`
    h1 { 
      font-size: 20px;
      line-height: 16px;
      margin-right: 0;
     }

     span {
       font-size: 12px;
     }
  `}
`;
