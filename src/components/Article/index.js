import React, { Component } from "react";
import { Link } from "react-router-dom";

import { ArticleBox, Tag, Info, ImageBox, Meta } from "./styles";

export default class ArticleCard extends Component {
  render() {
    return (
      <ArticleBox>
        <ImageBox>
          <Link to="/post-item">
            <img src="http://lorempixel.com/400/200/" alt="lorem" />
          </Link>
          <Tag>
            <Link to="/">CSS</Link>
          </Tag>
        </ImageBox>
        <Info>
          <h2>
            <Link to="/post-item">Efeitos com CSS animations lorem pixel</Link>
          </h2>
          <p>
            This article will show you why semantics on the web is important,
            what kind of semantic elements are built into HTML, and how you...
          </p>
          <Meta>20 de Agosto de 2019</Meta>
        </Info>
      </ArticleBox>
    );
  }
}
