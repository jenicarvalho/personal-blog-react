import React, { Component } from "react";
import { Link } from "react-router-dom";

import { ArticleBox, Tag, Info, ImageBox, Meta } from "./styles";

export default class ArticleHorizontal extends Component {
  render() {
    return (
      <ArticleBox>
        <ImageBox>
          <Link to="/">
            <img src="http://lorempixel.com/300/300/" alt="lorem" />
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
            obcaecati. A dolor sit amet consectetur adipisicing elit. Reiciendis
            quos ducimus saepe, minima sapiente pariatur rerum consectetur
            obcaecati.
          </p>
          <Meta>20 de Agosto de 2019</Meta>
        </Info>
      </ArticleBox>
    );
  }
}
