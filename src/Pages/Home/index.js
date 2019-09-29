import React, { Component } from "react";
import Category from "../../components/Category";
import Article from "../../components/Article";
import Sidebar from "../../components/Sidebar";
import ArticleList from "../../components/ArticleList";

import { ArticleContainer } from "./styles";
import { Base } from "../../components/Layout/Base";

export default class Home extends Component {
  render() {
    return (
      <Base>
        <Category name="Últimos Artigos" />
        <ArticleContainer>
          <Article />
          <Article />
          <Sidebar />
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
