import React, { Component } from "react";
import NodesPage from "./NodesPage";
import LineChart from "./Components/LineChart";
import logo from "./logo.svg";
import "./App.css";
import LoadingSpinner from "./Components/LoadingSpinner";
import service from "./utils/service";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Drill All The Humans</h1>
        </header>
        <div className="App-intro">
          <NodesPage />
        </div>
      </div>
    );
  }
}

export default App;
