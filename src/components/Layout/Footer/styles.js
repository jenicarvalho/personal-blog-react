import styled from "styled-components";
import { Base } from "../Base";
import media from 'styled-media-query'

export const Container = styled.div`
  background: var(--secondary);
  padding: 40px;
  color: #111;
  letter-spacing: 0.5px;

  ${Base} {
    display: flex;
    justify-content: space-between;
  }

  h3 {
    margin: 0 0 10px;
    text-transform: uppercase;
    font-size: 14px;
  }

  p {
    opacity: 0.7;
    margin: 5px 0;
  }

  ${media.lessThan("medium")`
    ${Base} {
      flex-direction: column;
    }
  `}
`;

export const About = styled.div`
  margin-right: 20px;
  flex: 0 0 30%;

  h4 {
    margin: 5px 0;
  }
`;

export const Social = styled.div`
  div {
    display: flex;
  }

  h3 {
    margin-top: 20px;
  }

  a {
    margin-right: 25px;

    svg {
      font-size: 22px;
      transition: transform 0.3s ease;
      &:hover {
        color: #333;
        transform: scale(1.2)
      }
    }
  }
`;

export const Contact = styled.div`
  flex: 0 0 30%;
`;

export const LastNews = styled.div`
  flex: 0 0 40%;
  margin-right: 20px;

  a {
    font-weight: 700;
    line-height: 20px;
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
      width: 100%;
      margin-bottom: 10px;
      padding-bottom: 10px;

      time {
        font-size: 12px;
        opacity: 0.5;
        font-weight: 100;
      }
    }
  }

  ${media.lessThan("medium")`
    margin: 20px 0;
    padding: 20px 0 0;
    border-top: 1px solid rgba(0,0,0, 0.1); 
    border-bottom: 1px solid rgba(0,0,0, 0.1); 
  `}
`;
