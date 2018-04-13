import React, { Component } from "react";
import AppContainer from "./AppContainer";
import LineChart from "./Components/LineChart";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  componentDidMount() {
    const data = {
      nodes: [
        {
          statusCode: "UP",
          statusText: "QV-Node-v1",
        },
        {
          statusCode: "DOWN",
          statusText: "QV-Node-v2",
        },
        {
          statusCode: "DOWN",
          statusText: "QV-Node-v3",
        },
        {
          statusCode: "UP",
          statusText: "QV-Node-v4",
        },
      ],
    };

    this.setState({ data });
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
            "Loading..."
          )}
        </p>
      </div>
    );
  }
}

export default App;
