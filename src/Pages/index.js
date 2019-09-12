import React, { Component } from "react";

import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { Base } from "../components/Layout/Base";

export default class Default extends Component {
  render() {
    return (
      <>
        <Header />
        <Base>{this.props.children}</Base>
        <Footer />
      </>
    );
  }
}
