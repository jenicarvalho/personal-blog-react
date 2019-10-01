import React, { Component } from "react";
import Category from "../../components/Category";
import Article from "../../components/Article";
import Sidebar from "../../components/Sidebar";
import ArticleList from "../../components/ArticleList";

import { ArticleContainer } from "./styles";
import { Base } from "../../components/Layout/Base";
import Axios from "axios";

export default class Home extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    Axios.get("http://jenicarvalho.com.br/wp-json/wp/v2/posts").then(posts => {
      this.setState({ posts: posts.data });
    });
  }

  render() {
    return (
      <Base>
        <Category name="Últimos Artigos" />
        <ArticleContainer>
          {this.state.posts.map(post => (
            <Article content={post} />
          ))}

          {/* <Sidebar /> */}
        </ArticleContainer>

        <ArticleContainer>
          <div>
            <Category name="Performance" />
            <ArticleList />
          </div>
          <div>
            <Category name="Carreira" />
            <ArticleList />
          </div>
          <div>
            <Category name="JavaScript" />
            <ArticleList />
          </div>
        </ArticleContainer>
      </Base>
    );
  }
}
