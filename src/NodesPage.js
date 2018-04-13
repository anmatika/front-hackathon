import React, { Component } from 'react';
import NodesListContainer from './NodesListContainer';
import InfoTitle from './Components/InfoTitle';
import LineChart from './Components/LineChart';
import logo from './logo.svg';
import './App.css';
import LoadingSpinner from './Components/LoadingSpinner';
import service from './utils/service';
import 'bootstrap/dist/css/bootstrap.min.css';

class NodesPage extends Component {
	componentDidMount() {
		service
			.fetchNodesMock()
			.then((data) => {
				this.setState({ data });
			})
			.then(() => {
				this.setState({ foundIssue: false });
				this.state.data.nodes.map((node) => {
					if (node.statusCode == 'DOWN') {
						this.setState({ foundIssue: true });
					}
				});
			});
	}

	render() {
		return (
			<div>
				<div className="Info-title">
					<InfoTitle
						dataReady={this.state != null && this.state.data != null}
						nodesStatus={this.state && this.state.foundIssue ? this.state.foundIssue : null}
					/>
				</div>
				{this.state != null && this.state.data != null ? (
					<NodesListContainer nodes={this.state.data.nodes} />
				) : (
					<LoadingSpinner />
				)}
			</div>
		);
	}
}

export default NodesPage;
