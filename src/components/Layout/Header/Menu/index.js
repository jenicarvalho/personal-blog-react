import React from "react";
import { NavLink } from "react-router-dom";

import { NavBar } from "./styles";
import { Base } from "../../Base";

export default function Menu() {
  return (
    <NavBar>
      <Base>
        <NavLink activeClassName="selected" to="/categoria/react/1">React </NavLink>
        <NavLink activeClassName="selected" to="/categoria/node/15">NODE </NavLink>
        <NavLink activeClassName="selected" to="/categoria/react-native/145">React Native </NavLink>
        <NavLink activeClassName="selected" to="/categoria/css/4">CSS </NavLink>
        <NavLink activeClassName="selected" to="/categoria/performance/16">Performance </NavLink>
        <NavLink activeClassName="selected" to="/categoria/git/7">GIT </NavLink>
        <NavLink activeClassName="selected" to="/categoria/carreira/144">Carreira </NavLink>
        <a href="https://jeniffer.com.br" target="_blank" rel="noopener noreferrer">Sobre </a>
      </Base>
    </NavBar>
  );
}
