import React, { Component } from "react";

import { Container } from "./styles";

export default class Category extends Component {
  render() {
    return (
      <Container>
        <h2>{this.props.name}</h2>
      </Container>
    );
  }
}
