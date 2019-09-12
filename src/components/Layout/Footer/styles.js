import styled from "styled-components";
import { Base } from "../Base";

export const Container = styled.div`
  background: #262626;
  padding: 40px;
  color: #fff;
  font-size: 12px;

  ${Base} {
    display: flex;
    justify-content: space-between;
  }

  h3 {
    margin: 0;
  }
`;

export const About = styled.div`
  margin-right: 20px;
  flex: 0 0 30%;
  p {
    font-size: 11px;
  }
`;

export const LastNews = styled.div`
  flex: 0 0 60%;

  a {
    font-weight: 700;
    line-height: 20px;
    color: #fff;
    display: block;

    &:hover {
      color: #e91e63;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;

    li {
      width: 40%;
      margin-bottom: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.12);
      margin-right: 50px;

      time {
        font-size: 10px;
        opacity: 0.5;
        font-weight: 100;
      }
    }
  }
`;
