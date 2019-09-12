import React, { Component } from "react";

import { MenuLink } from "./styles";

export default class Link extends Component {
  render() {
    return <MenuLink to={this.props.link}>{this.props.name}</MenuLink>;
  }
}
