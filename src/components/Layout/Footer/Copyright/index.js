import React from "react";

import { Container } from "./styles";

export default function Copyright() {
  return (
    <Container>
      Jeniffer Carvalho {"</>"} <small> Um blog para front-enders</small>
      <span role="img" aria-label="tech-girl">
        👩‍💻
      </span>
    </Container>
  );
}
