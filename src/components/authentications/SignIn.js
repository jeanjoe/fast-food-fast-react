import React, { Component } from "react";
import { loginUser } from "../../actions/authAction";
import { getMenus } from '../../actions/menuActions';
import { connect } from "react-redux";
import SignInForm from "./SignInForm";
import { Container, Segment, Grid } from "semantic-ui-react";

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      loginError: null,
      loading: false
    };
  }

  componentDidMount () {
    console.log(this.props);
  }

  handleSubmit = () => {
    this.setState({ loading: true });
    const { email, password } = this.state;
    const data = {
      email: email,
      password: password
    };
    this.props.loginUser(data);
  };

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      loginError: null
    });
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ loading: false, loginError: null });
    if (nextProps.user.message === "Login successfully") {
      this.setState({
        loginSuccess: "Login successful, Redirecting you..."
      });
      localStorage.setItem("auth_token", nextProps.user.user_token);
      window.location.href = "/";
    }
    if (nextProps.error.response) {
      this.setState({
        loginError: nextProps.error.response.data
      });
    }
  }

  render() {
    const { loading, loginError, loginSuccess } = this.state;
    return (
      <Container>
        <Grid centered stackable>
          <Grid.Column width={6}>
            <Segment style={{ margin: "5em 0em" }}>
              <SignInForm
                loading={loading}
                loginError={loginError}
                loginSuccess={loginSuccess}
                handleOnChange={this.handleOnChange}
                handleSubmit={this.handleSubmit}
              />
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  error: state.authReducer.errors,
  user: state.authReducer.user
});
export default connect(
  mapStateToProps,
  { loginUser, getMenus }
)(SignIn);
