import React, { Fragment } from "react";
import { Message } from "semantic-ui-react";

const Alert = ({ message, type }) => {
  return (
    <Fragment>
      <Message className={type}>
        <Message.Header as="h5"> {message} </Message.Header>
      </Message>
    </Fragment>
  );
};

export default Alert;
