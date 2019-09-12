import React from "react";
import { Link } from "react-router-dom";
import Copyright from "./Copyright";
import { Base } from "../Base";

import { Container, About, LastNews } from "./styles";

export default function Footer() {
  return (
    <>
      <Container>
        <Base>
          <About>
            <h3>Resumo</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
              quo mollitia quisquam beatae? Error, ducimus repudiandae animi,
              atque quas impedit, necessitatibus aut beatae assumenda quisquam
              voluptate quod magnam perspiciatis aliquam!
            </p>
          </About>
          <LastNews>
            <h3>Últimas notícias</h3>
            <ul>
              <li>
                <Link>Noticia lorem ipsum dolor sit</Link>{" "}
                <time>11 de Junho de 2019</time>
              </li>
              <li>
                <Link>Noticia lorem ipsum dolor sit</Link>{" "}
                <time>11 de Junho de 2019</time>
              </li>
              <li>
                <Link>Noticia lorem ipsum dolor sit</Link>{" "}
                <time>11 de Junho de 2019</time>
              </li>
              <li>
                <Link>Noticia lorem ipsum dolor sit</Link>{" "}
                <time>11 de Junho de 2019</time>
              </li>
              <li>
                <Link>Noticia lorem ipsum dolor sit</Link>{" "}
                <time>11 de Junho de 2019</time>
              </li>
              <li>
                <Link>Noticia lorem ipsum dolor sit</Link>{" "}
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
