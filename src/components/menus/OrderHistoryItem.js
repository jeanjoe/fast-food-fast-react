import React from "react";
import PropTypes from "prop-types";
import { Item, Label, Grid } from "semantic-ui-react";

const OrderHistoryItem = ({ order }) => {
  return (
    <Item>
      <Item.Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
      <Item.Content>
        <Item.Header as="a">{order.title}</Item.Header>
        <hr />
        <Item.Meta><span className="cinema">Fast Food Fast</span></Item.Meta>
        <Grid>
          <Grid.Column width={12}>
            <Item.Description>{order.description}</Item.Description>
            <Item.Extra>
              <Label color="red">{order.price} UGX</Label>
              <Label>{order.created_at}</Label>
            </Item.Extra>
          </Grid.Column>
          <Grid.Column width={4}>
            <Label >Quantity: {order.quantity}</Label>
            <Label >Price: {order.price}</Label>
            <Label >Total Amount: {parseInt(order.price) * parseInt(order.quantity)} UGX</Label>
          </Grid.Column>
        </Grid>
      </Item.Content>
    </Item>
  );
};

OrderHistoryItem.propTypes = {
  order: PropTypes.instanceOf(Object).isRequired
};

export default OrderHistoryItem;
