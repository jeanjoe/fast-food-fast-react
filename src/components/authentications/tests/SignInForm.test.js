import React from "react";
import expect from "expect";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import SignInForm from "../SignInForm";
configure({ adapter: new Adapter() });

describe("Test article component", () => {
  const props = {
    handleSubmit: jest.fn(),
    handleOnChange: jest.fn(),
    loading: true,
    loginSuccess: null,
    loginError: "Error"
  };
  const wrapper = shallow(<SignInForm {...props} />);

  it("Matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
