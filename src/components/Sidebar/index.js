import React, { Component } from "react";
import { Link } from "react-router-dom";

import { SidebarBox, List, Item, Image, Meta } from "./styles";

export default class Sidebar extends Component {
  render() {
    return (
      <>
        <SidebarBox>
          <header>
            <h2>Mais lidos</h2>
          </header>
          <List>
            <Item>
              <Image>
                <img src="http://lorempixel.com/60/60/" alt="lorem" />
              </Image>
              <div>
                <h3>
                  <Link>React e redux na prática</Link>
                </h3>
                <Meta>20 de Agosto de 2019</Meta>
              </div>
            </Item>

            <Item>
              <Image>
                <img src="http://lorempixel.com/60/60/" alt="lorem" />
              </Image>
              <div>
                <h3>
                  <Link>GraphQL na prática</Link>
                </h3>
                <Meta>20 de Agosto de 2019</Meta>
              </div>
            </Item>
            <Item>
              <Image>
                <img src="http://lorempixel.com/60/60/" alt="lorem" />
              </Image>
              <div>
                <h3>
                  <Link>GraphQL na prática</Link>
                </h3>
                <Meta>20 de Agosto de 2019</Meta>
              </div>
            </Item>
            <Item>
              <Image>
                <img src="http://lorempixel.com/60/60/" alt="lorem" />
              </Image>
              <div>
                <h3>
                  <Link>GraphQL na prática</Link>
                </h3>
                <Meta>20 de Agosto de 2019</Meta>
              </div>
            </Item>
          </List>
        </SidebarBox>
      </>
    );
  }
}
