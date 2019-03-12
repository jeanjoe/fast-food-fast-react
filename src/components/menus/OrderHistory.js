import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getOrderHistory } from "../../actions/menuActions";
import { Container, Item, Breadcrumb } from "semantic-ui-react";
import Alert from "../notifications/Alert";
import OrderHistoryItem from "./OrderHistoryItem";

export class OrderHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      orderHistory: [],
      orderHistoryError: null
    };
  }

  componentDidMount() {
    const { getOrderHistory } = this.props;
    if (localStorage.getItem("auth_token")) {
      getOrderHistory();
    } else this.props.history.push("/sign-in");
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ loading: false });
    if (nextProps.orderHistory.order) {
      this.setState({ orderHistory: nextProps.orderHistory.order });
    } else if (nextProps.orderHistoryError.response.status === 401) {
      this.props.history.push("/sign-in");
    }
  }

  render() {
    const { loading, orderHistory, orderHistoryError } = this.state;
    return (
      <Container style={{ padding: "1em 1em" }}>
        <Breadcrumb style={{ padding: "1em 0em" }}>
          <Breadcrumb.Section as={Link} to="/">
            Home
          </Breadcrumb.Section>
          <Breadcrumb.Divider>/</Breadcrumb.Divider>
          <Breadcrumb.Section as={Link} to="/menus">
            Menu
          </Breadcrumb.Section>
          <Breadcrumb.Divider>/</Breadcrumb.Divider>
          <Breadcrumb.Section active>Order History</Breadcrumb.Section>
        </Breadcrumb>
        {orderHistoryError && loading === false? (
          <Alert message="Error loading History..." type="negative" />
        ) : (
          ""
        )}
        {orderHistory.length < 1 && loading === false ? (
          <Alert message="You have no order History..." type="negative" />
        ) : (
          ""
        )}
        {loading ? (
          <Alert
            message="We are fetching your order history...."
            type="positive"
          />
        ) : (
          <Item.Group>
            {orderHistory.map((order, key) => (
              <OrderHistoryItem key={key} order={order} />
            ))}
          </Item.Group>
        )}
      </Container>
    );
  }
}

OrderHistory.protType = {
  getOrderHistory: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  orderHistory: state.menuReducer.orderHistory,
  orderHistoryError: state.menuReducer.orderHistoryError
});

export default connect(
  mapStateToProps,
  { getOrderHistory }
)(OrderHistory);
