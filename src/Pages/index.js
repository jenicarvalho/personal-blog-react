import React, { Component } from "react";

import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

export default class Default extends Component {
  render() {
    return (
      <>
        <Header />
        {this.props.children}
        <Footer />
      </>
    );
  }
}
