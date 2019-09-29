import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  ArticleBox,
  Tag,
  Info,
  ImageBox,
  Meta,
  List,
  Item,
  Image
} from "./styles";

export default class SingleList extends Component {
  render() {
    return (
      <ArticleBox>
        <ImageBox>
          <Link to="/">
            <img src="http://lorempixel.com/400/200/" alt="lorem" />
          </Link>
          <Tag>
            <Link to="/">CSS</Link>
          </Tag>
        </ImageBox>
        <Info>
          <h2>
            <Link to="/">Efeitos com CSS animations lorem pixel</Link>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            quos ducimus saepe, minima sapiente pariatur rerum consectetur
            obcaecati .
          </p>
          <Meta>20 de Agosto de 2019</Meta>
        </Info>

        <List>
          <Item>
            <Image>
              <img src="http://lorempixel.com/60/60/" alt="lorem " />
            </Image>
            <div>
              <h3>
                <Link>GraphQL na prática</Link>
              </h3>
              <Meta>20 de Agosto de 2019</Meta>
            </div>
          </Item>
          <Item>
            <Image>
              <img src="http://lorempixel.com/60/60/" alt="lorem" />
            </Image>
            <div>
              <h3>
                <Link>GraphQL na prática</Link>
              </h3>
              <Meta>20 de Agosto de 2019</Meta>
            </div>
          </Item>
        </List>
      </ArticleBox>
    );
  }
}
