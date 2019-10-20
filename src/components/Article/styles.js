import styled from "styled-components";

export const ArticleBox = styled.div`
  flex: 0 0 100%;
  overflow: hidden;
  box-shadow: 4px 4px 0 2px rgba(0,0,0,0.1);
  border: 1px solid #aaa;

  &:hover {
    box-shadow: none;
    transition: all ease 0.25s;
  }

  h2 {
    font-size: 18px;
    color: #393e46;
    line-height: 28px;
    margin: 0;
    position: relative;
    min-height: 56px;

    a {
      padding: 2px;
      color: rgba(0, 0, 0, 0.8);
      font-size: 1.25rem;
      line-height: 1.25;
      font-weight: 700;
      &:hover {
        background: var(--primary);
      }
    }
  }

  p {
    color: #6f7885;
    font-size: 14px;
    line-height: 24px;
  }
`;

export const Meta = styled.div`
  border-top: 1px solid #eee;
  padding: 18px 0 0;
  color: #aaa;
  font-size: 12px;
`;

export const Info = styled.div`
  padding: 20px;
`;

export const ImageBox = styled.div`
  position: relative;
  height: 175px;
  cursor: pointer;
  overflow: hidden;

  a {
    display: block;

    div {
      background-size: cover;
      width: 100%;
      height: 175px;
      background-position: center;
    }
  }
`;

export const Tag = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: #000;
  color: #fff;
  padding: 5px 15px 4px;
  border-radius: 5px;
  font-size: 12px;

  a {
    color: #fff;
  }
`;
