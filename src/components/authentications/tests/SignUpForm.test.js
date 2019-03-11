import React from "react";
import expect from "expect";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import SignUpForm from "../SignUpForm";
configure({ adapter: new Adapter() });

describe("Test article component", () => {
  const props = {
    handleSubmit: jest.fn(),
    handleOnChange: jest.fn(),
    passwordError: 'error',
    loading: true,
    allError: null,
    registerSuccess: null,
  };
  const wrapper = shallow(<SignUpForm {...props} />);

  it("Matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
