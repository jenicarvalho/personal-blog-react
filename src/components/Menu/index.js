import React from "react";

import Link from "./Link";
import { NavBar } from "./styles";
import { Base } from "../Layout/Base";

export default function Menu() {
  return (
    <NavBar>
      <Base>
        <Link link="/" name="React" />
        <Link link="/" name="CSS" />
        <Link link="/" name="UX" />
        <Link link="/" name="Performance" />
        <Link link="/" name="Carreira" />
        <Link link="/" name="Sobre" />
        <Link link="/" name="Contato" />
      </Base>
    </NavBar>
  );
}
