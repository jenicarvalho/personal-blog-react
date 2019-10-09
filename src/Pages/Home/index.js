import React, { Component } from "react";
import Category from "../../components/Category";
import Article from "../../components/Article";

import { ArticleContainer } from "./styles";
import { Base } from "../../components/Layout/Base";
import axios from "axios";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";

export default class Home extends Component {
  state = {
    ultimosPosts: []
  };

  componentDidMount = async () => {
    await axios
      .get("http://jenicarvalho.com.br/wp-json/wp/v2/posts")
      .then(posts => {
        this.setState({
          ultimosPosts: posts.data
        });
      });
  };

  render() {
    return (
      <>
        <Header />
        <Base>
          <Category name="Últimos Artigos" />
          <ArticleContainer>
            {this.state.ultimosPosts.map(post => (
              <Article
                content={post}
                categoryId={post.categories}
                key={post.id}
              />
            ))}
          </ArticleContainer>
        </Base>
        <Footer />
      </>
    );
  }
}
