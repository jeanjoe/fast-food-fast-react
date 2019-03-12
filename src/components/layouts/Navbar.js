import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Container, Menu, Button, Icon } from "semantic-ui-react";
import logo from "../../logo.svg";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("auth_token");
    this.setState({ token: token });
  }

  handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  render() {
    const { token } = this.state;
    return (
      <Menu stackable inverted color="red">
        <Container>
          <Menu.Item header as={Link} to="/">
            <img src={logo} alt="logo" />
            FAST FOOD FAST APP
          </Menu.Item>
          <Menu.Menu position="right">
            {token ? (
              <Fragment>
                <Menu.Item>
                  <Button onClick={this.handleLogout}>
                    <Icon name="sign-out" />
                    Logout
                  </Button>
                </Menu.Item>
                <Menu.Item>
                  <Button as={Link} to="/order-history">
                    Order History
                  </Button>
                </Menu.Item>
              </Fragment>
            ) : (
              <Fragment>
                <Menu.Item>
                  <Button primary as={Link} to="/sign-up">
                    <Icon name="signup" />
                    Sign up
                  </Button>
                </Menu.Item>
                <Menu.Item>
                  <Button as={Link} to="/sign-in">
                    <Icon name="sign in alternate" /> Log-in
                  </Button>
                </Menu.Item>
              </Fragment>
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}

export default Navbar;
