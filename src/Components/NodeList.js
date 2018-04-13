import React from "react";
import { Line } from "react-chartjs-2";
import { Row, Col } from "reactstrap";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import Node from "./Node";
import styled from "styled-components";
const uuidv4 = require("uuid/v4");

const NodeList = props => {
  const PaddedCardTitle = styled(CardTitle)`
    padding-top: 25px;
    padding-bottom: 25px;
  `;
  const ShadowedCard = styled(Card)`
    box-shadow: 1px 1px 1px black;
  `;
  return (
    <Row>
      <Col xs="6">
        <ShadowedCard>
          <PaddedCardTitle>Nodes Up</PaddedCardTitle>
          <CardBody>
            {props.nodes
              .filter(c => c.statusCode === "UP")
              .map(c => <Node key={uuidv4()} nodeName={c.nodeName} statusCode={c.statusCode} />)}
          </CardBody>
        </ShadowedCard>
      </Col>
      <Col xs="6">
        <ShadowedCard>
          <PaddedCardTitle>Nodes Down</PaddedCardTitle>
          <CardBody>
            {props.nodes
              .filter(c => c.statusCode === "DOWN")
              .map(c => <Node key={uuidv4()} nodeName={c.nodeName} statusCode={c.statusCode} />)}
          </CardBody>
        </ShadowedCard>
      </Col>
    </Row>
  );
};

export default NodeList;
