import React from "react";
import { Line } from "react-chartjs-2";
import Node from "./Node";

const NodeList = props => {
  return <div>{props.nodes.map(c => <Node status={c.statusText} />)}</div>;
};

export default NodeList;
