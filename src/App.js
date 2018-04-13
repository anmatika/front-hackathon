import React, { Component } from 'react';
import AppContainer from './AppContainer';
import LineChart from './Components/LineChart';
import InfoTitle from './Components/InfoTitle';
import logo from './logo.svg';
import './App.css';
import LoadingSpinner from './Components/LoadingSpinner';
import service from './utils/service';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
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
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Drill All The Humans</h1>
				</header>
				<div className="Info-title">
					<InfoTitle
						dataReady={this.state != null && this.state.data != null}
						nodesStatus={this.state && this.state.foundIssue ? this.state.foundIssue : null}
					/>
				</div>
				<div className="App-intro">
					{this.state != null && this.state.data != null ? (
						<AppContainer nodes={this.state.data.nodes} />
					) : (
						<LoadingSpinner />
					)}
				</div>
			</div>
		);
	}
}

export default App;
