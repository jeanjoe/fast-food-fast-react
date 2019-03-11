import React, { Fragment } from "react";
import { Form, Button, Header, Icon } from "semantic-ui-react";

import Alert from "../notifications/Alert";

const SignInForm = ({
  loginError,
  loginSuccess,
  loading,
  handleSubmit,
  handleOnChange
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Header textAlign="center" as="h3">
        Sign in
      </Header>
      {loginError ? (
        <Alert
          message={loginError.message || loginError.error}
          type="negative"
        />
      ) : (
        ""
      )}
      {loginSuccess ? <Alert message={loginSuccess} type="positive" /> : ""}
      <Form.Field>
        <label>Email</label>
        <input
          placeholder="login email"
          name="email"
          type="email"
          onChange={handleOnChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input
          placeholder="********"
          name="password"
          type="password"
          onChange={handleOnChange}
        />
      </Form.Field>
      <Form.Field style={{ margin: "1em 0em" }}>
        <Button type="submit" color="red" fluid>
          {loading ? (
            <Fragment>
              <Icon loading name="spinner" />
              Signing In...
            </Fragment>
          ) : (
            "Sign In"
          )}
        </Button>
      </Form.Field>
    </Form>
  );
};

export default SignInForm;
