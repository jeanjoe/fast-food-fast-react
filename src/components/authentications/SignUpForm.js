import React, { Fragment } from "react";
import {
  Form,
  Button,
  Checkbox,
  Header,
  Icon
} from "semantic-ui-react";
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
      {passwordError || allError ? <Alert message={passwordError || allError} type="negative" /> : ""}
      {registerSuccess ?  <Alert message={registerSuccess} type="positive" /> : ""}
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
        <Checkbox
          checked
          disabled
          label="I agree to the Terms and Conditions"
        />
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
  );
};

export default SignUpForm;
