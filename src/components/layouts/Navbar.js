import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Menu, Button, Icon } from "semantic-ui-react";
import logo from "../../logo.svg";

export class Navbar extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const color = "red";
    return (
      <Menu stackable inverted color={color}>
        <Container>
          <Menu.Item header as={Link} to="/">
            <img src={logo} alt="logo" />
            FAST FOOD FAST APP
          </Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item>
              <Button primary>
                {" "}
                <Icon name="signup" />
                Sign up
              </Button>
            </Menu.Item>

            <Menu.Item>
              <Button>
                <Icon name="sign in alternate" /> Log-in
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}

export default Navbar;
