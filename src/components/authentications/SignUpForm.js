import React, { Fragment } from "react";
import { Form, Button, Checkbox, Header, Icon, Input } from "semantic-ui-react";
import Alert from "../notifications/Alert";

const SignUpForm = ({
  handleSubmit,
  handleOnChange,
  passwordError,
  allError,
  registerSuccess,
  loading
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Header textAlign="center">Create your account.</Header>
      {passwordError || allError ? (
        <Alert message={passwordError || allError} type="negative" />
      ) : (
        ""
      )}
      {registerSuccess ? (
        <Alert message={registerSuccess} type="positive" />
      ) : (
        ""
      )}
      <Form.Field
        label="First Name"
        onChange={handleOnChange}
        name="firstName"
        control={Input}
        type="text"
        placeholder="First Name"
      />
      <Form.Field
        label="Last Name"
        onChange={handleOnChange}
        name="lastName"
        control={Input}
        type="text"
        placeholder="Last Name"
      />
      <Form.Field
        label="Email"
        onChange={handleOnChange}
        name="email"
        control={Input}
        type="email"
        placeholder="Email"
      />
      <Form.Field
        label="Password"
        onChange={handleOnChange}
        name="password"
        control={Input}
        type="password"
        placeholder="********"
      />
      <Form.Field
        label="Confirm password"
        onChange={handleOnChange}
        name="confirmPassword"
        control={Input}
        type="password"
        placeholder="*******"
        min={8}
      />
      <Form.Field
        control={Checkbox}
        checked
        disabled
        label="I agree to the Terms and Conditions"
      />
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
  );
};

export default SignUpForm;
