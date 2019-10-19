import React from "react";
import { Link } from "react-router-dom";
import {FiGithub, FiLinkedin, FiTwitter} from 'react-icons/fi'
import Copyright from "./Copyright";
import { Base } from "../Base";

import { Container, About, Contact,  LastNews, Social } from "./styles";

export default function Footer() {
  return (
    <>
      <Container>
        <Base>
          <About>
            <h3>Sobre</h3>
            <p>Trabalho com desenvolvimento desde 2014, e amo <strong>Front end</strong> desde então. Atualmente meu foco é em React ⚛ e todo o seu ecossistema. </p>
            <p>Comecei esse blog como forma de retribuir a comunidade o conhecimento que adquiri por todos esses anos. </p>
            <p>Então, bora estudar! 🚀</p>
          </About>
          <LastNews>
            <h3>Artigos Populares</h3>
            <ul>
              <li>
                <Link to="/mudar-cor-do-tema-no-visual-studio-code-e-deixar-identica-ao-sublime">Deixar Visual Studio Code Idêntico ao Sublime Text</Link>
                <time>28 de Janeiro de 2018</time>
              </li>
              <li>
                <Link to="/aviao-com-keyframes-css">Avião com Keyframes CSS</Link>
                <time>30 de Março de 2017</time>
              </li>
              <li>
                <Link to="/como-instalar-o-node-js">Como instalar o Node.js</Link>
                <time>17 de Junho de 2016</time>
              </li>
            </ul>
          </LastNews>
            <Contact>
              <h3>Quer falar comigo?</h3> 
              <p> Mande um e-mail para me(at)jeniffer.com.br </p>
           
              <Social>
                <h3>Redes</h3>
                <div>
                  <a href="https://github.com/jenicarvalho" target="_blank" rel="noopener noreferrer"><FiGithub /></a>
                  <a href="/#" target="_blank" rel="noopener noreferrer"><FiTwitter /></a>
                  <a href="https://www.linkedin.com/in/jeniffer-carvalho-front-end/" target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
                </div>
              </Social>
            </Contact>
        </Base>
      </Container>
      <Copyright />
    </>
  );
}
