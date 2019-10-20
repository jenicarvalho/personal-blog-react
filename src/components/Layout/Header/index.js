import React, { Component } from "react";
import {FiMenu} from 'react-icons/fi'
import Logo from "./Logo";
import Menu from "./Menu";
import { Container } from './styles'

export default class Header extends Component {
  state = {
    showMobileMenu: false,
    showSandwich: false,
  }
  
  componentDidMount = () => {
    if (window.innerWidth <= 768) {
      this.setState({ showSandwich: true });
    }
  };

  handleMenuMobile = () => {
    this.setState({showMobileMenu: !this.state.showMobileMenu})
  }
  
  render() {
    const {showMobileMenu, showSandwich} = this.state;
    return (
      <Container>
        <header>
          <Logo />
          {showSandwich && <FiMenu onClick={() => this.handleMenuMobile()} />}
          <Menu responsive={showMobileMenu}/>
        </header>
      </Container>
    );
  }
}
