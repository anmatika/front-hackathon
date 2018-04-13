import React from "react";
import { Alert } from "reactstrap";

const Node = props => {
  const { nodeName, statusCode } = props;
  const color = statusCode === "UP" ? "success" : "danger";
  return (
    <div>
      <Alert color={color}>{nodeName}</Alert>
    </div>
  );
};

export default Node;
