import styled from "styled-components";

export const NavBar = styled.nav`
  border-top: 1px solid #ebebeb6e;
  padding: 15px 0;
  height: 58px;
  background: #fff;
  box-shadow: 0px 5px 15px #54545414;
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

    &:hover {
      background: var(--primary);
      color: #fff;
    }
  }
`;