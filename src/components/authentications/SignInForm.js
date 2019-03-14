import React, { Fragment } from "react";
import { Form, Button, Header, Icon, Input } from "semantic-ui-react";

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
      <Form.Field
        label="Email"
        onChange={handleOnChange}
        name="email"
        control={Input}
        type="email"
        placeholder="login Email"
      />
      <Form.Field
        label="Password"
        onChange={handleOnChange}
        name="password"
        control={Input}
        type="password"
        placeholder="*******"
      />
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
