import React from "react";
import PropTypes from "prop-types";
import {
  Item,
  Button,
  Icon,
  Label,
  Form,
  Grid
} from "semantic-ui-react";

const MenuItem = ({
  handleOnChange,
  handleSubmit,
  handleLocation,
  menu,
}) => {
  const options = [
    { key: "1", text: "1", value: "1" },
    { key: "2", text: "2", value: "2" },
    { key: "3", text: "3", value: "3" },
    { key: "4", text: "4", value: "4" },
    { key: "5", text: "5", value: "5" }
  ];
  return (
    <Item>
      <Item.Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
      <Item.Content>
        <Item.Header as="a">{menu.title}</Item.Header>
        <hr />
        <Item.Meta>
          <span className="cinema">Fast Food Fast</span>
        </Item.Meta>
        <Grid>
          <Grid.Column width={12}>
            <Item.Description>{menu.description}</Item.Description>
            <Item.Extra>
              <Label color="red">{menu.price} UGX</Label>
              <Label>{menu.created_at}</Label>
            </Item.Extra>
          </Grid.Column>
          <Grid.Column width={4}>
            <Form onSubmit={() => handleSubmit(menu.id)}>
              <Form.Select
                fluid
                placeholder="Quantity"
                selection
                options={options}
                onChange={handleOnChange}
                defaultValue="1"
              />
              <Form.Input
                name="location"
                control="input"
                placeholder="Location"
                onChange={handleLocation}
                required={true}
              />
              <Button
                primary
                fluid
                floated="right"
                style={{ margin: "0em 0em" }}
              >
                <Icon name="shopping basket" />
                Order
              </Button>
            </Form>
          </Grid.Column>
        </Grid>
      </Item.Content>
    </Item>
  );
};

MenuItem.propTypes = {
  handleLocation: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  menu: PropTypes.instanceOf(Object).isRequired,
}

export default MenuItem;
