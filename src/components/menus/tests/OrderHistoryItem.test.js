import React from "react";
import expect from "expect";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import OrderHistoryItem from "../OrderHistoryItem";
configure({ adapter: new Adapter() });

describe("Test article component", () => {
  const props = {
    order: {
      id: 1,
      title: "test title",
      description: "test description",
      price: 1000,
      quantity: 4,
    }
  };
  const wrapper = shallow(<OrderHistoryItem {...props} />);

  it("Matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
