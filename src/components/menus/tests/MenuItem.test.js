import React from "react";
import expect from "expect";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import MenuItem from "../MenuItem";
configure({ adapter: new Adapter() });

describe("Test article component", () => {
  const props = {
    handleOnChange: jest.fn(),
    handleSubmit: jest.fn(),
    handleLocation: jest.fn(),
    menu: {
      id: 1,
      title: "test title",
      description: "test description",
      price: 1000
    }
  };
  const wrapper = shallow(<MenuItem {...props} />);

  it("Matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
