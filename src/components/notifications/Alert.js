import React from "react";
import { Message } from "semantic-ui-react";

const Alert = ({ message, type }) => {
  return (
    <div>
      {type === "positive" ? (
        <Message positive>
          <Message.Header as="h5"> {message} </Message.Header>
        </Message>
      ) : (
        <Message negative>
          <Message.Header as="h5"> {message} </Message.Header>
        </Message>
      )}
    </div>
  );
};

export default Alert;
