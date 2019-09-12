import styled from "styled-components";

export const Container = styled.div`
  h2 {
    border-bottom: 2px solid #eee;
    position: relative;
    padding-bottom: 5px;
    text-transform: uppercase;
    font-size: 16px;

    &:after {
      content: "";
      position: absolute;
      border-bottom: 3px solid #e91e63;
      width: 20%;
      left: 0;
      bottom: -3px;
    }
  }
`;
