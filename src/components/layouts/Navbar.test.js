import React from "react";
import expect from "expect";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Navbar from "./Navbar";
configure({ adapter: new Adapter() });

describe("Test article component", () => {
  const props = {
    message: "error",
    type: "positive"
  };
  const wrapper = shallow(<Navbar {...props} />);

  it("Matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("handle handleLogout", () => {
    wrapper.instance().handleLogout();
  });
});
