import React, { Fragment } from "react";
import {
  Container,
  Form,
  Button,
  Checkbox,
  Segment,
  Grid,
  Header,
  Message,
  Icon
} from "semantic-ui-react";

const SignUpForm = ({
  handleSubmit,
  handleOnChange,
  passwordError,
  allError,
  registerSuccess,
  loading
}) => {
  return (
    <Container>
      <Grid centered stackable>
        <Grid.Column width={6}>
          <Segment style={{ margin: "5em 0em", padding: "2em 1em" }}>
            <Form onSubmit={handleSubmit}>
              <Header textAlign="center">Create your account.</Header>
              {passwordError || allError ? (
                <Message negative>
                  <Message.Header as="h5">
                    {passwordError || allError}
                  </Message.Header>
                </Message>
              ) : (
                ""
              )}
              {registerSuccess ? (
                <Message positive>
                  <Message.Header as="h5">{registerSuccess}</Message.Header>
                </Message>
              ) : (
                ""
              )}
              <Form.Field>
                <label>First Name</label>
                <input
                  name="firstName"
                  placeholder="First Name"
                  onChange={handleOnChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <input
                  name="lastName"
                  placeholder="Last Name"
                  onChange={handleOnChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Email address</label>
                <input
                  name="email"
                  placeholder="manzede@andela.com"
                  type="email"
                  onChange={handleOnChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input
                  name="password"
                  placeholder="********"
                  min={8}
                  type="password"
                  onChange={handleOnChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Confirm password</label>
                <input
                  name="confirmPassword"
                  placeholder="*********"
                  min={8}
                  type="password"
                  onChange={handleOnChange}
                />
              </Form.Field>
              <Form.Field>
                <Checkbox checked disabled label="I agree to the Terms and Conditions" />
              </Form.Field>
              <Button type="submit" color="red" size="medium" fluid>
                {loading ? (
                  <Fragment>
                    <Icon loading name="spinner" />
                    Signing Up...
                  </Fragment>
                ) : (
                  "Sign up"
                )}
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default SignUpForm;
