import React, { Component } from "react";
import Category from "../../components/Category";
import Article from "../../components/Article";

import { ArticleContainer } from "./styles";
import { Base } from "../../components/Layout/Base";
import axios from "axios";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";

export default class CategoryList extends Component {
  state = {
    categoryPosts: []
  };

  componentDidMount = async () => {
    await axios
      .get("http://jenicarvalho.com.br/?rest_route=/wp/v2/posts/&categories=4")
      .then(posts => {
        this.setState({
          categoryPosts: posts.data
        });
      });
  };

  render() {
    return (
      <>
        <Header />
        <Base>
          <Category name="Categoria React" />
          <ArticleContainer>
            {this.state.categoryPosts.map(post => (
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
