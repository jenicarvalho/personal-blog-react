import React, { Component } from "react";
import Logo from "./Logo";
import Menu from "./Menu";

export default class Header extends Component {
  render() {
    return (
      <header>
        <Logo />
        <Menu />
      </header>
    );
  }
}
