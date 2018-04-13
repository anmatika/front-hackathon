import React from "react";
import { Alert } from "reactstrap";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faFire from "@fortawesome/fontawesome-free-solid/faFire";
import faThumbsUp from "@fortawesome/fontawesome-free-solid/faThumbsUp";
import styled from "styled-components";

const Node = props => {
  const { nodeName, statusCode } = props;
  const color = statusCode === "UP" ? "success" : "danger";
  const Delimiter = styled.span`
    margin-right: 10px;
  `;
  return (
    <div>
      <Alert color={color}>
        <FontAwesomeIcon icon={statusCode === "UP" ? faThumbsUp : faFire} />

        <Delimiter />
        {nodeName}
      </Alert>
    </div>
  );
};

export default Node;
