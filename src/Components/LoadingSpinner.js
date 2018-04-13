import React from "react";
import styled from "styled-components";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faCoffee from "@fortawesome/fontawesome-free-solid/faCoffee";

const LoadingSpinner = () => {
  const MarginSpan = styled.span`
    margin-top: 200px;
  `;

  return (
    <MarginSpan>
      <h2 className="d-inline"> Loading ... </h2> <FontAwesomeIcon icon={faCoffee} spin size="3x" />
    </MarginSpan>
  );
};

export default LoadingSpinner;
