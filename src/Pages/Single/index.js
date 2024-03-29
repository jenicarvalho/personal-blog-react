import React, { Component } from "react";
import axios from "axios";
import Moment from "react-moment";
import "moment/locale/pt";
import {Helmet} from "react-helmet";

import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import { Container, Image, Content, Meta } from "./styles";
import { stripedHtml } from "../../Helpers/functions";

export default class Single extends Component {
  state = {
    post: null,
  };

  componentDidMount = async () => {
    const slug = this.props.match.params.postslug;

    await axios
    .get(`http://jenicarvalho.com.br/wp-json/wp/v2/posts?slug=${slug}`)
    .then(post => {
      this.setState({
        post: post.data[0]
      });
    });

  }

  render() {
    const { post } = this.state;

    if (!post) return null;

    const description = stripedHtml(post.excerpt.rendered);
    const title = stripedHtml(post.title.rendered);

    return (
      <>
        <Helmet>
          <title>{title}</title>
          <meta
            name="description"
            content={description}
          />
        </Helmet>
        <Header />
        <Container>
          <header>
            <h1> <span
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              /></h1>
            <Meta>
              <Moment locale="pt" format="DD [de] MMMM [de] YYYY">
                {post.date}
              </Moment>
            </Meta>
          </header>
          <Image>
            <img src={post.fimg_url} alt="hero" />
          </Image>

          <Content>
            <span dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </Content>

        </Container>
        <Footer />
        )}
      </>
    );
  }
}
