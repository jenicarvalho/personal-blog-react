import styled from "styled-components";
import media from "styled-media-query";

export const ArticleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin: 30px 0;

  ${media.lessThan("medium")`
    grid-template-columns: repeat(2, 1fr);
    margin: 30px;
  `}
  
  ${media.lessThan("600px")`
    grid-template-columns: repeat(1, 1fr);
  `}
`;

export const Pagination = styled.div`
  display: flex;
  margin-bottom: 20px;

  ${media.lessThan("medium")`
    margin: 30px;
  `}

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