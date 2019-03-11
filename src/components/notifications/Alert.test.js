import React from "react";
import expect from "expect";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Alert from "./Alert";
configure({ adapter: new Adapter() });

describe("Test article component", () => {
  const props = {
    message: 'error',
    type: 'positive',
  };
  const wrapper = shallow(<Alert {...props} />);

  it("Matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
