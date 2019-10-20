import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  h2 {
    color: #393e46;
    border-bottom: 2px solid #eee;
    position: relative;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 13px;
    padding: 14px 0;

    ${media.lessThan("medium")`
      margin: 0 30px;
    `}

    &:after {
      content: "";
      position: absolute;
      border-bottom: 3px solid var(--primary);
      width: 15%;
      left: 0;
      bottom: -3px;
    }
  }
`;
