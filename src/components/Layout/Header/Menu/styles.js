import styled from "styled-components";

export const NavBar = styled.nav`
  border-bottom: 1px solid #eee;
  padding: 15px 0;
  height: 58px;
  margin-bottom: 30px;

  div {
    display: flex;
    justify-content: space-between;
  }

  a {
    color: #201f22;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 1px;
    padding: 5px 10px;
    transition: all 0.2s ease-in-out;
    font-weight: 700;

    &:hover,
    &.selected {
      background: var(--secondary);
    }
  }
`;
