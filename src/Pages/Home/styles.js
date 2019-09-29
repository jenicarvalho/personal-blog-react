import styled from "styled-components";

export const ArticleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => (props.grid ? props.grid : 3)}, 1fr);
  grid-gap: 30px;
  margin: 30px 0;
`;
