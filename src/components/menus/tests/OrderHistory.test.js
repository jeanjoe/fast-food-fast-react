import React from "react";
import expect from "expect";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import { OrderHistory } from "../OrderHistory";
configure({ adapter: new Adapter() });

describe("Test article component", () => {
  const props = {
    getOrderHistory: jest.fn(),
    history: {
      push: jest.fn()
    }
  };
  const wrapper = shallow(<OrderHistory {...props} />);
  wrapper.setState({
    orderHistory: [],
  })
  it("Matches the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should handle componentDidMount on unauthenticated user", () => {
    wrapper.instance().componentDidMount();
    expect(props.history.push).toHaveBeenCalled();
  });
  it("should handle componentDidMount on authenticated user", () => {
    localStorage.setItem("auth_token", "sometoken");
    wrapper.instance().componentDidMount();
    expect(props.getOrderHistory).toHaveBeenCalled();
  });

  it("should handle componentWillReceiveProps", () => {
    const nextProps = {
      orderHistory: {
        order: [
          {
            id: 1,
            price: 500
          },
          {
            id: 2,
            price: 1000
          }
        ]
      },
      orderHistoryError: {}
    };
    wrapper.instance().componentWillReceiveProps(nextProps);
    expect(wrapper.state("orderHistory")).toEqual(nextProps.orderHistory.order);
  });
  it("should handle componentWillReceiveProps on Error", () => {
    const nextProps = {
      orderHistory: {
        order: null
      },
      orderHistoryError: {
        response: {
          status: 401
        }
      }
    };
    wrapper.instance().componentWillReceiveProps(nextProps);
    expect(props.history.push).toHaveBeenCalled();
  });
});
