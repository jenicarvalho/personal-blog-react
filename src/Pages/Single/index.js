import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FiTag } from "react-icons/fi";
import Highlight, { defaultProps } from "prism-react-renderer";
import axios from "axios";
import Moment from "react-moment";
import "moment/locale/pt";

import { Pre, LineNo } from "./styles";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import { Container, Tags, Image, Content, Meta, MorePosts } from "./styles";

const exampleCode = `
import { parseISO, isAfter } from 'date-fns';

const date = '2018-04-01 18:00:00';
const parsedDate = parseISO(date);

const past = isAfter(parsedDate, new Date()); // true
`.trim();

export default class Single extends Component {
  state = {
    post: null
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
  };

  render() {
    const { post } = this.state;

    if (!post) return null;

    return (
      <>
        <Header />
        <Container>
          <header>
            <Tags>
              <FiTag />
              <Link to="/">React</Link>
              <Link to="/">JavaScript</Link>
            </Tags>
            <h1> {post.title.rendered}</h1>
            <p>
              The right way to create your build pipeline in Docker and reduce
              the size of your images
            </p>
            <Meta>
              <Moment locale="pt" format="DD [de] MMMM [de] YYYY">
                {post.date}
              </Moment>
            </Meta>
          </header>
          <Image>
            <img src={post.fimg_url} alt="hero" />
          </Image>

          <Highlight {...defaultProps} code={exampleCode} language="jsx">
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <Pre className={className} style={style}>
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    <LineNo>{i + 1}</LineNo>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </Pre>
            )}
          </Highlight>

          <Content>
            <span dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </Content>

          <MorePosts>
            <h2>Veja também</h2>
            <section></section>
          </MorePosts>
        </Container>
        <Footer />
        )}
      </>
    );
  }
}
