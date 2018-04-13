import React from 'react';
import { Line } from 'react-chartjs-2';
import { Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import Node from './Node';
const uuidv4 = require('uuid/v4');

const NodeList = (props) => {
	return (
		<Row>
			<Col xs="6">
				<Card>
					<CardTitle>Nodes Up</CardTitle>
					<CardBody>
						{props.nodes
							.filter((c) => c.statusCode === 'UP')
							.map((c) => <Node key={uuidv4()} statusText={c.statusText} statusCode={c.statusCode} />)}
					</CardBody>
				</Card>
			</Col>
			<Col xs="6">
				<Card>
					<CardTitle>Nodes Down</CardTitle>
					<CardBody>
						{props.nodes
							.filter((c) => c.statusCode === 'DOWN')
							.map((c) => <Node key={uuidv4()} statusText={c.statusText} statusCode={c.statusCode} />)}
					</CardBody>
				</Card>
			</Col>
		</Row>
	);
};

export default NodeList;
