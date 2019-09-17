import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MenuLink = styled(NavLink)`
  color: #201f22;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
  padding: 5px 10px;
  height: 1px;
  transition: all 0.2s ease-in-out;

  &:hover {
    height: 27px;
    background: var(--primary);
    color: #fff;
  }
`;
