import React from "react";
import expect from "expect";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import { SignUp } from "../SignUp";
configure({ adapter: new Adapter() });

describe("Test article component", () => {
  const props = {
    error: [],
    user: [],
    loginUser: jest.fn(),
    registerUser: jest.fn()
  };
  const wrapper = shallow(<SignUp {...props} />);

  it("Matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("Handle handleOnChange", () => {
    const event = {
      target: {
        value: "text"
      }
    };
    wrapper.instance().handleOnChange(event);
    expect(wrapper.state("allError")).toEqual(null);
  });

  it("Handle handleSubmit", () => {
    wrapper.instance().handleSubmit();
    expect(wrapper.state("allError")).toEqual("All fields are required.");
  });
  it("Handle handleSubmit on success", () => {
    wrapper.setState({
      firstName: "Man",
      lastName: "ben",
      email: "email",
      password: "36725372648736",
      confirmPassword: "36725372648736"
    });
    wrapper.instance().handleSubmit();
    expect(props.registerUser).toHaveBeenCalled();
  });
  it("Handle handleSubmit on short password", () => {
    wrapper.setState({
      firstName: "Man",
      lastName: "ben",
      email: "email",
      password: "134232",
      confirmPassword: "134232"
    });
    wrapper.instance().handleSubmit();
    expect(wrapper.state("passwordError")).toEqual(
      "Password must be at least 8 characters"
    );
  });
  it("Handle handleSubmit on unmatching password", () => {
    wrapper.setState({
      firstName: "Man",
      lastName: "ben",
      email: "email",
      password: "134223652763632",
      confirmPassword: "1342186387i3232"
    });
    wrapper.instance().handleSubmit();
    expect(wrapper.state("passwordError")).toEqual(
      "Your passwords DO NOT match."
    );
  });
  it("Handle componentWillReceiveProps", () => {
    const nextProps = {
      user: {
        message: "User added successfully"
      },
      error: {}
    };
    wrapper.instance().componentWillReceiveProps(nextProps);
    expect(wrapper.state("registerSuccess")).toEqual(
      "Registration successful, Please login to your account"
    );
  });
  it("Handle componentWillReceiveProps on Error", () => {
    const nextProps = {
      user: {},
      error: {
        data: {
          message: "error message"
        }
      }
    };
    wrapper.instance().componentWillReceiveProps(nextProps);
    expect(wrapper.state("allError")).toEqual("error message");
  });
});
