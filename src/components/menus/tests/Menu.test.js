import React from "react";
import expect from "expect";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import { Menu } from "../Menu";
configure({ adapter: new Adapter() });

describe("Test article component", () => {
  const props = {
    history: {
      push: jest.fn()
    },
    getMenus: jest.fn(),
    postUserOrder: jest.fn()
  };
  const wrapper = shallow(<Menu {...props} />);

  it("Matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("Component should mount and redirect if not authenticated", () => {
    wrapper.instance().componentDidMount();
    expect(props.history.push).toHaveBeenCalled();
  });

  it("Component should mount and get menus if authenticated", () => {
    localStorage.setItem("auth_token", "some-token");
    wrapper.instance().componentDidMount();
    expect(props.getMenus).toHaveBeenCalled();
  });

  it("Handle handleOnChange", () => {
    const event = {
      target: {
        textContent: "text"
      }
    };
    wrapper.instance().handleOnChange(event);
    expect(wrapper.state("selectOption")).toEqual("text");
  });

  it("Handle handleLocation", () => {
    const event = {
      target: {
        value: "text"
      }
    };
    wrapper.instance().handleLocation(event);
    expect(wrapper.state("location")).toEqual("text");
  });

  it("Handle handleSubmit", () => {
    const id = 1;
    wrapper.instance().handleSubmit(id);
    expect(props.postUserOrder).toHaveBeenCalled();
  });

  it("Handle componentWillReceiveProps", () => {
    const nextProps = {
      menus: {
        menus: [
          {
            id: 1,
            title: "test title",
            description: "test description",
            price: 1000
          }
        ]
      },
      order: {},
      error: {
        response: {}
      },
      orderError: {}
    };
    wrapper.instance().componentWillReceiveProps(nextProps);
    expect(wrapper.state("menus")).toEqual(nextProps.menus.menus);
  });

  it("Handle componentWillReceiveProps on unauthorizes", () => {
    const nextProps = {
      menus: {
        menus: []
      },
      order: {},
      error: {
        response: {
          status: 401
        }
      },
      orderError: {
        response: {
          status: 401
        }
      }
    };
    wrapper.instance().componentWillReceiveProps(nextProps);
    expect(props.history.push).toHaveBeenCalled();
  });
  it("Handle componentWillReceiveProps when order is inserted", () => {
    const nextProps = {
      menus: {
        menus: []
      },
      order: {
        data: "Order Inserted Successfully"
      },
      error: {
        response: {}
      },
      orderError: {
        response: {}
      }
    };
    wrapper.instance().componentWillReceiveProps(nextProps);
    expect(wrapper.state("orderSuccess")).toEqual(
      "Order Inserted Successfully"
    );
  });
});
