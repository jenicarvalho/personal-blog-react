import React, { Component } from "react";
import { LogoWrapper } from "./styles";

export default class Logo extends Component {
  render() {
    return (
      <LogoWrapper to="/">
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
