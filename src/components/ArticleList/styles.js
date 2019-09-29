import styled from "styled-components";
import { Link } from "react-router-dom";

export const ArticleBox = styled.div`
  flex: 0 0 100%;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 30px;
  border: 1px solid #eeeeee;

  h2 {
    font-size: 18px;
    color: #393e46;
    line-height: 28px;
    margin: 0;
    position: relative;

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

  a {
    display: block;
  }
`;

export const Tag = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: #000;
  padding: 5px 15px 4px;
  border-radius: 5px;
  font-size: 12px;

  a {
    color: #fff;
  }
`;

export const List = styled.div`
  padding: 20px;
`;
export const Item = styled.div`
  display: flex;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #eeeeee;

  &:last-child {
    border-bottom: 0;
    padding-bottom: 0;
  }

  h3 {
    margin: 0;
    font-size: 12px;

    a {
      padding: 2px;

      &:hover {
        background: var(--primary);
        color: #fff;
      }
    }
  }
`;

export const Image = styled(Link)`
  display: block;
  border-radius: 5px;
  margin-right: 15px;
  overflow: hidden;
  max-width: 60px;
  max-height: 60px;
`;
