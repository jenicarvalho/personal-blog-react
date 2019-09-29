import React from "react";
import { Link } from "react-router-dom";

import { NavBar } from "./styles";
import { Base } from "../../Base";

export default function Menu() {
  return (
    <NavBar>
      <Base>
        <Link to="/">React </Link>
        <Link to="/">CSS </Link>
        <Link to="/">UX </Link>
        <Link to="/">Performance </Link>
        <Link to="/">Carreira </Link>
        <Link to="/">Sobre </Link>
      </Base>
    </NavBar>
  );
}
