import styled from "styled-components";

export const ArticleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin: 20px 0;
`;

export const Pagination = styled.div`
  display: flex;
  margin-bottom: 20px;

  span {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    margin-right: 10px;
    width: 25px;
    height: 25px;

    &:hover {
      background: #000;
      color: #fff;
    }
  }
`