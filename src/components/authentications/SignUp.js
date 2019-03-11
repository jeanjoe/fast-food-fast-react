import React, { Component } from "react";
import { registerUser } from "../../actions/authAction";
import { connect } from "react-redux";
import SignUpForm from "./SignUpForm";

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      confirmPassword: null,
      loading: false,
      registerSuccess: null
    };
  }
  handleSubmit = () => {
    this.setState({ allError: null, passwordError: null });
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    } = this.state;
    if (firstName || lastName || email || password) {
      if (password.length > 7) {
        if (confirmPassword === password) {
          this.setState({ loading: true });
          const user = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password
          };
          this.props.registerUser(user);
        } else {
          this.setState({
            passwordError: "Your passwords DO NOT match."
          });
        }
      } else {
        this.setState({
          passwordError: "Password must be at least 8 characters"
        });
      }
    } else {
      this.setState({
        allError: "All fields are required."
      });
    }
  };

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      loading: false,
      allError: null,
      passwordError: null
    });
  };

  componentWillReceiveProps(nextprops) {
    this.setState({ loading: false, allError: null, passwordError: null });
    if (nextprops.error.data) {
      this.setState({ allError: nextprops.error.data.message });
    }
    if (nextprops.user.message === "User added successfully") {
      this.setState({
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        confirmPassword: null,
        registerSuccess: "Registration successful, Please login to your account"
      });
    }
  }

  render() {
    const { passwordError, allError, loading, registerSuccess } = this.state;
    return (
      <SignUpForm
        handleSubmit={this.handleSubmit}
        handleOnChange={this.handleOnChange}
        passwordError={passwordError}
        allError={allError}
        loading={loading}
        registerSuccess={registerSuccess}
      />
    );
  }
}
const mapStatetoProps = state => ({
  error: state.authReducer.registerErrors,
  user: state.authReducer.registerUser
});

export default connect(
  mapStatetoProps,
  { registerUser }
)(SignUp);
