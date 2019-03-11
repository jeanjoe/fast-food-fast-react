import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, List, Grid, Header, Segment } from "semantic-ui-react";

export class Footer extends Component {
  render() {
    return (
      <Segment inverted color="red" vertical style={{ padding: "5em 0em" }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Pages" />
                <List link inverted>
                  <List.Item as={Link} to="/">
                    Home
                  </List.Item>
                  <List.Item as={Link} to="/sign-up">
                    Sign Up
                  </List.Item>
                  <List.Item as={Link} to="/sign-in">
                    Sign in
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Services" />
                <List link inverted>
                  <List.Item as="a">Outside Catering</List.Item>
                  <List.Item as="a">Door to Door Delivery</List.Item>
                  <List.Item as="a">Take aways</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as="h4" inverted>
                  Contact us.
                </Header>
                <div>
                  <p>
                    Tel: <strong>+256-773-969641</strong>
                  </p>
                </div>
                <div>
                  <p>
                    Email: <strong>info@fastfoodfast.com</strong>
                  </p>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    );
  }
}

export default Footer;
