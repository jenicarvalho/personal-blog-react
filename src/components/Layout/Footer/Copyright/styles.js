import styled from "styled-components";
import media from 'styled-media-query'

export const Container = styled.footer`
  @import url("https://fonts.googleapis.com/css?family=Comfortaa:400,700&display=swap");

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  background-color: #fff;
  font-family: "Comfortaa", cursive;
  color: #000;
  font-size: 14px;

  small {
    border-left: 1px solid;
    margin-left: 10px;
    padding-left: 10px;
    font-size: 12px;
    color: #888;
  }


  ${media.lessThan("medium")`
    flex-direction: column;

    small {
      border: none;
      padding: 0;
      margin: 0
    }
  `}
`;
