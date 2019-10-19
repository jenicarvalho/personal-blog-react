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
    categoryPosts: [],
    categoryId: null,
    categoryName: ''
  };

  componentDidMount = async () => {
    const { category, name } = this.props.match.params;
    this.setState({ categoryId: category, categoryName: name})
    this.requestCategory(category)
  };

  componentDidUpdate(prevProps, prevState) {
    const { category, name } = this.props.match.params;  
    
    if(prevProps === undefined) {
      return false
    }
    
    if (this.state.categoryId !== category) {
      this.setState({ categoryId: category, categoryName: name})
      this.requestCategory(category)
    }
  }

  requestCategory = async category => {
    await axios
      .get(`http://jenicarvalho.com.br/wp-json/wp/v2/posts?categories=${category}`)
      .then(posts => {
        this.setState({
          categoryPosts: posts.data
        });
      });
  }

  render() {
    const {  categoryPosts, categoryName } = this.state;

    return (
      <>
        <Header />
        <Base>
          <Category name={`Categoria ${categoryName}`} />
          <ArticleContainer>
            { Array.isArray(categoryPosts) && categoryPosts.length ? 
              categoryPosts.map(post => (
                <Article
                  content={post}
                  categoryId={post.categories}
                  key={post.id}
                />
              ))
              : 
              ( <p>Sem artigos nessa categoria ainda! :( </p> )
            }
          </ArticleContainer>
        </Base>
        <Footer />
      </>
    );
  }
}
