import React from "react";
import { Line } from "react-chartjs-2";
import Node from "./Node";

const NodeList = props => {
  return <div>{props.nodes.map(c => <Node statusText={c.statusText} statusCode={c.statusCode} />)}</div>;
};

export default NodeList;
