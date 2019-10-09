import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FiTag } from "react-icons/fi";
import Highlight, { defaultProps } from "prism-react-renderer";
import { Pre, LineNo } from "./styles";

import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import { Container, Tags, Image, Content, Meta, MorePosts } from "./styles";

const exampleCode = `
import { parseISO, isAfter } from 'date-fns';

const date = '2018-04-01 18:00:00';
const parsedDate = parseISO(date);

const past = isAfter(parsedDate, new Date()); // true
`.trim();

export default class Single extends Component {
  render() {
    return (
      <>
        <Header />
        <Container>
          <header>
            <Tags>
              <FiTag />
              <Link to="/">React</Link>
              <Link to="/">JavaScript</Link>
            </Tags>
            <h1>
              Tipos de navegação no React Native Lorem ipsum dolor sit ammet
            </h1>
            <p>
              The right way to create your build pipeline in Docker and reduce
              the size of your images
            </p>
            <Meta>20 de Agosto de 2019</Meta>
          </header>
          <Image>
            <img
              src="https://blog.rocketseat.com.br/content/images/2019/07/Tipos-de-navegac-a-o-no-React-Native.png"
              alt="hero"
            />
          </Image>

          <Highlight {...defaultProps} code={exampleCode} language="jsx">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <Pre className={className} style={style}>
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    <LineNo>{i + 1}</LineNo>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </Pre>
            )}
          </Highlight>

          <Content>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
            nam enim itaque rem nulla delectus, quae fugiat iusto, unde earum a
            consequatur architecto at natus, non distinctio tenetur praesentium
            accusamus. A id quisquam unde recusandae, molestias, ullam, nobis
            dolores distinctio facilis quia quis dignissimos! Explicabo quisquam
            iure, amet atque illo ipsam itaque in unde vel asperiores eaque aut,
            eos commodi. Labore porro ab saepe eligendi,{" "}
            <Link>consectetur</Link> praesentium! Ut eos placeat amet veritatis
            tempore earum reiciendis, beatae est excepturi? Modi, distinctio eos
            a aut qui sapiente repellat fugiat animi corporis corrupti! Nulla
            delectus porro mollitia asperiores
            <h2>Workflow Context API</h2>
            deserunt vitae doloribus, dicta facere magnam, velit corporis quae
            molestias iste dolores <Link>cumque minima quos</Link> animi.
            Veniam, perferendis! Hic ut corporis eveniet placeat maxime
            temporibus!
          </Content>

          <MorePosts>
            <h2>Veja também</h2>
            <section></section>
          </MorePosts>
        </Container>
        <Footer />
      </>
    );
  }
}
