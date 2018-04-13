import React from "react";
import styled from "styled-components";
import NodeList from "./Components/NodeList";
import { Container, Row, Col } from "reactstrap";

const NodesListContainer = props => {
  const { nodes } = props;
  const MarginContainer = styled(Container)`
    margin-top: 50px;
  `;
  return (
    <MarginContainer>
      <NodeList nodes={nodes} />
    </MarginContainer>
  );
};

export default NodesListContainer;
