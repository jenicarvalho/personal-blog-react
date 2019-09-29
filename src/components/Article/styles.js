import styled from "styled-components";

export const ArticleBox = styled.div`
  flex: 0 0 100%;
  border-radius: 5px;
  overflow: hidden;

  h2 {
    font-size: 18px;
    color: #393e46;
    line-height: 28px;
    margin: 0;
    position: relative;
    padding-top: 10px;

    &::before {
      content: "";
      position: absolute;
      padding: 1px;
      width: 100px;
      background: var(--primary);
      top: -3px;
    }

    a {
      padding: 2px;
      color: rgba(0, 0, 0, 0.8);
      font-size: 1.25rem;
      line-height: 1.25;
      font-weight: 700;
      &:hover {
        background: var(--primary);
        color: #fff;
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
  border: 1px solid #eeeeee;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const ImageBox = styled.div`
  position: relative;
  height: 175px;
  cursor: pointer;

  a {
    display: block;
  }
`;

export const Tag = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: var(--primary);
  padding: 5px 15px 4px;
  border-radius: 5px;
  font-size: 12px;

  a {
    color: #fff;
  }
`;
