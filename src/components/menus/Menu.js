import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getMenus, postUserOrder } from "../../actions/menuActions";
import { Container, Item, Icon, Message, Header } from "semantic-ui-react";
import Alert from "../notifications/Alert";
import MenuItem from "./MenuItem";

export class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      menus: [],
      selectOption: 1,
      location: null,
      ordering: false,
      orderSuccess: null,
      orderError: null
    };
  }

  componentDidMount() {
    const { getMenus } = this.props;
    if (localStorage.getItem("auth_token")) {
      getMenus();
    } else this.props.history.push("/sign-in");
  }

  handleOnChange = event => {
    this.setState({ selectOption: event.target.textContent });
  };

  handleSubmit = id => {
    const { location, selectOption } = this.state;
    const { postUserOrder } = this.props;
    const data = {
      menu_id: id,
      quantity: parseInt(selectOption),
      location: location
    };
    this.setState({ ordering: true });
    postUserOrder(data);
  };

  handleLocation = event => {
    this.setState({ location: event.target.value });
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ loading: false, ordering: false });
    if (nextProps.menus.menus) {
      this.setState({ menus: nextProps.menus.menus });
    } else if (nextProps.error.response.status === 401) {
      this.props.history.push("/sign-in");
    }
    if (nextProps.order.data === "Order Inserted Successfully") {
      this.setState({ orderSuccess: nextProps.order.data });
    }
    if (nextProps.orderError.response) {
      this.setState({ orderError: "Error while placing your order" });
    }
  }

  render() {
    const { loading, menus, ordering, orderSuccess, orderError } = this.state;
    return (
      <Container style={{ padding: "4em 0em" }}>
        <Header as="h2">Menu Items [{menus.length}]</Header>
        {ordering ? <Alert message="Ordering..." type="positive" /> : ""}
        {orderSuccess ? <Message positive>{orderSuccess}</Message> : ""}
        {orderError ? <Message negative>{orderError}</Message> : ""}
        {loading ? (
          <Message icon>
            <Icon name="circle notched" loading />
            <Message.Content>
              <Message.Header>Just one second</Message.Header>
              We are fetching menu items for you.
            </Message.Content>
          </Message>
        ) : (
          <Item.Group>
            {menus.map((menu, key) => (
              <MenuItem
                key={key}
                menu={menu}
                handleLocation={this.handleLocation}
                handleOnChange={this.handleOnChange}
                handleSubmit={this.handleSubmit}
              />
            ))}
          </Item.Group>
        )}
      </Container>
    );
  }
}

Menu.protType = {
  getMenus: PropTypes.func.isRequired,
  postUserOrder: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  menus: state.menuReducer.menus,
  error: state.menuReducer.errors,
  order: state.menuReducer.order,
  orderError: state.menuReducer.orderError
});

export default connect(
  mapStateToProps,
  { getMenus, postUserOrder }
)(Menu);
