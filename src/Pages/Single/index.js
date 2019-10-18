import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FiTag } from "react-icons/fi";
import axios from "axios";
import Moment from "react-moment";
import "moment/locale/pt";

import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import { Container, Tags, Image, Content, Meta } from "./styles";

export default class Single extends Component {
  state = {
    post: null,
    categoryName: '',
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

    await axios
    .get(`http://jenicarvalho.com.br/wp-json/wp/v2/categories/${this.state.post.categories[0]}`)
    .then(category => {
      this.setState({
        categoryName: category.data.name
      });
    });
    
  }

  render() {
    const { post, categoryName } = this.state;

    if (!post) return null;

    return (
      <>
        <Header />
        <Container>
          <header>
            <Tags>
              <FiTag />
              <Link to="/">{categoryName}</Link>
            </Tags>
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
