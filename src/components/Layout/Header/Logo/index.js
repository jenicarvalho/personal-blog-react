import React, { Component } from "react";
import { LogoWrapper } from "./styles";

export default class Logo extends Component {
  render() {
    return (
      <LogoWrapper>
        <h1>Jeniffer Carvalho {"</>"}</h1>
        <span>
          Conteúdo para Devs
          <span role="img" aria-label="tech-girl">
            👩‍💻
          </span>
        </span>
      </LogoWrapper>
    );
  }
}
