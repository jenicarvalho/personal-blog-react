import styled from "styled-components";
import { Base } from "../Base";

export const Container = styled.div`
  background: var(--secondary);
  padding: 40px;
  color: #fff;
  letter-spacing: 0.5px;

  ${Base} {
    display: flex;
    justify-content: space-between;
  }

  h3 {
    margin: 0;
    text-transform: uppercase;
    font-size: 14px;
  }
`;

export const About = styled.div`
  margin-right: 20px;
  flex: 0 0 30%;
  p {
    opacity: 0.7;
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
      text-decoration: underline;
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
