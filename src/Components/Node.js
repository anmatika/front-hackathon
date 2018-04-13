import React from "react";
import { Alert } from "reactstrap";

const Node = props => {
  const { status } = props;
  return (
    <div>
      <Alert color="primary">{status}</Alert>
    </div>
  );
};

export default Node;
