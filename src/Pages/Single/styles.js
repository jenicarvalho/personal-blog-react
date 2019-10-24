import styled from "styled-components";
import media from 'styled-media-query'

export const Container = styled.div`
  header {
    max-width: 760px;
    margin: 40px auto;

    h1 {
      font-size: 40px;
      line-height: 45px;
      color: #333;
      margin-bottom: 10px;
    }

    p {
      font-size: 22px;
      line-height: 30px;
    }

    ${media.lessThan("medium")`
      margin: 0 30px;
      h1 {
        font-size: 30px;
        line-height: 35px;
      }
    `}
  }

`;
export const Tags = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  svg {
    margin-right: 10px;
    color: var(--secondary);
    font-size: 18px;
  }

  a {
    background-color: #f4f4f4;
    font-size: 10px;
    font-weight: 700;
    display: inline-block;
    margin: 0 2px;
    padding: 4px 10px;
    -webkit-transition: all 0.15s ease;
    transition: all 0.15s ease;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    border-radius: 5px;

    &:hover {
      background-color: var(--primary);
    }
  }
`;

export const Image = styled.div`
  width: 100%;

  img {
    width: 100%;
  }
`;

export const Content = styled.div`
  max-width: 760px;
  margin: 50px auto;
  font-size: 18px;
  line-height: 32px;

  ${media.lessThan("medium")`
    margin: 30px;
  `}

  pre {
    color: #ccc;
    background: rgb(40, 41, 54);
    text-shadow: none;
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.8;
  }

  a {
    padding: 2px;
    border-bottom: 1px solid var(--secondary);

    &:hover {
      background-color: var(--secondary);
      text-decoration: none;
    }
  }
`;
export const Meta = styled.div`
  color: rgba(0, 0, 0, 0.54);
  margin-bottom: 20px;
`;

export const MorePosts = styled.div`
  max-width: 760px;
  margin: 30px auto 50px;

  section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
  }
`;

export const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  line-height: 1.3;
`;

export const LineNo = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
`;
