import React, { Component } from "react";
import { Link } from "react-router-dom";

import { ArticleBox, Tag, Info, ImageBox, Meta } from "./styles";
import { sliceString } from "../../Helpers/functions";

export default class ArticleCard extends Component {
  render() {
    const { content } = this.props;

    return (
      <ArticleBox>
        <ImageBox>
          <Link to={`/${content.slug}`}>
            <img src="http://lorempixel.com/400/200/" alt="lorem" />
          </Link>
          <Tag>
            <Link to="/">CSS</Link>
          </Tag>
        </ImageBox>
        <Info>
          <h2>
            <Link to={`/${content.slug}`}>
              <span
                dangerouslySetInnerHTML={{ __html: content.title.rendered }}
              />
            </Link>
          </h2>
          <div
            dangerouslySetInnerHTML={{
              __html: sliceString(content.excerpt.rendered, 100)
            }}
          />
          <Meta>20 de Agosto de 2019</Meta>
        </Info>
      </ArticleBox>
    );
  }
}
