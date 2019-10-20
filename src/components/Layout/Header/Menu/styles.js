import styled from "styled-components";
import media from 'styled-media-query'

export const NavBar = styled.nav`
  border-bottom: 1px solid #eee;
  padding: 15px 0;
  height: 58px;
  margin-bottom: 30px;

  ${media.lessThan("medium")`
    display: ${({ responsive }) => responsive ? 'block' : 'none' };
    background: var(--secondary);
    height: auto;
    padding: 15px 30px;
    div {
      flex-direction: column;

      a {
        display: inline-block;
        padding: 10px;

        &:hover,
        &:focus {
          background: #111;
          color: var(--primary);
        }
      }
    }
  `}

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
