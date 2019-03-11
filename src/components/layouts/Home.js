import React, { Component } from "react";
import bannerImage from "../../assets/images/3a51b4c300bacca9d6ad7d22ef3b0ba6.png";
import { Link } from "react-router-dom";
import {
  Container,
  Button,
  Grid,
  Header,
  Image,
  Responsive,
  Segment
} from "semantic-ui-react";

export class Home extends Component {
  render() {
    return (
      <Container>
        <Responsive>
          <Segment style={{ padding: "4em 0em" }} vertical>
            <Grid container stackable verticalAlign="middle">
              <Grid.Row>
                <Grid.Column width={8}>
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    Fast Food Fast - App.
                  </Header>
                  <p style={{ fontSize: "1.33em" }}>
                    We can give your convenience you need, we are dynamic and active 24/7.
                  </p>
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    Your fastest food delivery service app.
                  </Header>
                  <p style={{ fontSize: "1.33em" }}>
                    Yes that's right, you thought it was the stuff of dreams,
                    we deliver it right at your sitting room.
                  </p>
                </Grid.Column>
                <Grid.Column floated="right" width={6}>
                  <Image rounded size="large" src={bannerImage} />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Button size="huge" color="red">
                    Place your Order
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Responsive>
      </Container>
    );
  }
}

export default Home;
