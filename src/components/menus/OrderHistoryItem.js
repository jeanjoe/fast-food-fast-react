import React from "react";
import PropTypes from "prop-types";
import { Item, Label, Grid, Icon, Table } from "semantic-ui-react";

const OrderHistoryItem = ({ order }) => {
  const orderStatus =
    order.status === "Cancelled"
      ? "red"
      : order.status === "Processing"
      ? "orange"
      : order.status === "New"
      ? "blue"
      : "green";
  return (
    <Item>
      <Item.Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
      <Item.Content>
        <Item.Header as="a">{order.title}</Item.Header>
        <hr />
        <Item.Meta>
          <span className="cinema">Fast Food Fast</span>
        </Item.Meta>
        <Grid>
          <Grid.Column width={11}>
            <Item.Description>{order.description}</Item.Description>
            <Item.Extra>
              <Label color="red">{order.price} UGX</Label>
              <Label>
                <Icon name="map marker" />
                {order.location}
              </Label>
              <Label className={orderStatus}>
                <Icon name="hourglass half" />
                {order.status}
              </Label>
            </Item.Extra>
          </Grid.Column>
          <Grid.Column width={5}>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Qty</Table.HeaderCell>
                  <Table.HeaderCell>{order.quantity}</Table.HeaderCell>
                </Table.Row>
                <Table.Row>
                  <Table.HeaderCell>Amount</Table.HeaderCell>
                  <Table.HeaderCell>
                    {parseInt(order.price) * parseInt(order.quantity)} UGX
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
            </Table>
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
