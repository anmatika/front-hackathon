import React, { Component } from 'react';
import AppContainer from './AppContainer';
import LineChart from './Components/LineChart';
import logo from './logo.svg';
import './App.css';
import LoadingSpinner from './Components/LoadingSpinner';
import service from './utils/service';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
	componentDidMount() {
		service.fetchNodesMock().then((data) => {
			this.setState({ data });
		});
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Drill All The Humans</h1>
				</header>
				<p className="App-intro">
					{this.state != null && this.state.data != null ? (
						<AppContainer nodes={this.state.data.nodes} />
					) : (
						<LoadingSpinner />
					)}
				</p>
			</div>
		);
	}
}

export default App;
