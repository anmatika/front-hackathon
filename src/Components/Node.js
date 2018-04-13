import React from "react";
import { Alert } from "reactstrap";

const Node = props => {
  const { statusText, statusCode } = props;
  const color = statusCode === "UP" ? "success" : "danger";
  return (
    <div>
      <Alert color={color}>{statusText}</Alert>
    </div>
  );
};

export default Node;
