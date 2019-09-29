import styled from "styled-components";

export const Container = styled.div`
  max-width: 760px;
  margin: 50px auto;
`;

export const Content = styled.div`
  font-size: 18px;
  line-height: 32px;

  a {
    padding: 2px;
    border-bottom: 1px solid var(--secondary);

    &:hover {
      background-color: var(--secondary);
      color: #fff;
      text-decoration: none;
    }
  }
`;
