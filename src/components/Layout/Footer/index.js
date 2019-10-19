import React from "react";
import { Link } from "react-router-dom";
import {FiGithub, FiLinkedin, FiTwitter} from 'react-icons/fi'
import Copyright from "./Copyright";
import { Base } from "../Base";

import { Container, About, Social,  LastNews } from "./styles";

export default function Footer() {
  return (
    <>
      <Container>
        <Base>
          <About>
            <h3>Sobre</h3>
            <p>Trabalho com desenvolvimento desde 2014, e amo Front end desde então. Atualmente meu foco é em React ⚛ e todo o seu ecossistema. </p>
            <p>Comecei esse blog como forma de retribuir a comunidade o conhecimento que adquiri por todos esses anos. </p>
            <h4>Quer falar comigo?</h4> <p> Mande um e-mail para me(at)jeniffer.com.br </p>
            <h4>Redes</h4>
            <Social>
              <a href="https://github.com/jenicarvalho" target="_blank" rel="noopener noreferrer"><FiGithub /></a>
              <a href="/#" target="_blank" rel="noopener noreferrer"><FiTwitter /></a>
              <a href="https://www.linkedin.com/in/jeniffer-carvalho-front-end/" target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
            </Social>
          </About>
          <LastNews>
            <h3>Últimos Artigos</h3>
            <ul>
              <li>
                <Link to="/">Noticia lorem ipsum dolor sit</Link>{" "}
                <time>11 de Junho de 2019</time>
              </li>
              <li>
                <Link to="/">Noticia lorem ipsum dolor sit</Link>{" "}
                <time>11 de Junho de 2019</time>
              </li>
              <li>
                <Link to="/">Noticia lorem ipsum dolor sit</Link>{" "}
                <time>11 de Junho de 2019</time>
              </li>
              <li>
                <Link to="/">Noticia lorem ipsum dolor sit</Link>{" "}
                <time>11 de Junho de 2019</time>
              </li>
              <li>
                <Link to="/">Noticia lorem ipsum dolor sit</Link>{" "}
                <time>11 de Junho de 2019</time>
              </li>
              <li>
                <Link to="/">Noticia lorem ipsum dolor sit</Link>{" "}
                <time>11 de Junho de 2019</time>
              </li>
            </ul>
          </LastNews>
        </Base>
      </Container>
      <Copyright />
    </>
  );
}
