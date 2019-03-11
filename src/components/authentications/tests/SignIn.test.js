import React from "react";
import expect from "expect";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import { SignIn } from "../SignIn";
configure({ adapter: new Adapter() });

describe("Test article component", () => {
  const props = {
    error: [],
    user: [],
    loginUser: jest.fn()
  };
  const wrapper = shallow(<SignIn {...props} />);

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
    expect(wrapper.state("loginError")).toEqual(null);
  });
  it("Handle handleOnChange", () => {
    wrapper.instance().handleSubmit();
    expect(props.loginUser).toHaveBeenCalled();
  });
  it("Handle componentWillReceiveProps", () => {
    const nextProps = {
      user: {
        message: "Login successfully"
      },
      error: {}
    };
    wrapper.instance().componentWillReceiveProps(nextProps);
    expect(wrapper.state("loginSuccess")).toEqual(
      "Login successful, Redirecting you..."
    );
  });
  it("Handle componentWillReceiveProps on Error", () => {
    const nextProps = {
      user: { },
      error: {
          response: {
              data: 'error message'
          }
      }
    };
    wrapper.instance().componentWillReceiveProps(nextProps);
    expect(wrapper.state("loginError")).toEqual(
        'error message'
    );
  });
});
