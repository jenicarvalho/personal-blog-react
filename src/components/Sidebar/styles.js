import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarBox = styled.aside`
  border: 1px solid #eeeeee;
  border-radius: 5px;

  header {
    border-bottom: 1px solid #eeeeee;
    padding: 15px 20px;
  }

  h2 {
    color: #393e46;
    margin: 0;
    text-transform: uppercase;
    font-size: 13px;
  }
`;

export const List = styled.div`
  padding: 20px;
  background-color: #fff;
`;

export const Item = styled.div`
  display: flex;
  padding-bottom: 18px;
  margin-bottom: 18px;
  border-bottom: 1px solid #eeeeee;

  &:last-child {
    border-bottom: 0;
    margin-bottom: 0;
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

export const Meta = styled.div`
  color: #aaa;
  font-size: 12px;
`;

export const Image = styled(Link)`
  display: block;
  border-radius: 5px;
  margin-right: 15px;
  overflow: hidden;
  max-width: 60px;
  max-height: 60px;
`;
