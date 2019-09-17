import React, { Component } from "react";
import Category from "../../components/Category";
import ArticleCard from "../../components/ArticleCard";
import { ArticleList } from "../../components/ArticleList";
import Sidebar from "../../components/Sidebar";
import SingleList from "../../components/SingleList";
import ArticleHorizontal from "../../components/ArticleHorizontal";

export default class Home extends Component {
  render() {
    return (
      <>
        <Category name="Últimos Artigos" />
        <ArticleList>
          <ArticleCard />
          <ArticleCard />
          <Sidebar />
        </ArticleList>

        <ArticleList>
          <div>
            <Category name="Performance" />
            <SingleList />
          </div>
          <div>
            <Category name="Carreira" />
            <SingleList />
          </div>
          <div>
            <Category name="JavaScript" />
            <SingleList />
          </div>
        </ArticleList>

        <ArticleHorizontal />
        <ArticleHorizontal />
      </>
    );
  }
}
