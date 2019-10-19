import React, { Component } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import "moment/locale/pt";

import { ArticleBox, Info, ImageBox, Meta } from "./styles";
import { sliceString } from "../../Helpers/functions";

export default class ArticleCard extends Component {
  render() {
    const { content } = this.props;

    return (
      <ArticleBox>
        <ImageBox>
          <Link to={`/${content.slug}`}>
            <div style={{backgroundImage: `url(${content.fimg_url})`}} />
          </Link>
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
          <Meta>
            <Moment locale="pt" format="DD [de] MMMM [de] YYYY">
              {content.date}
            </Moment>
          </Meta>
        </Info>
      </ArticleBox>
    );
  }
}
