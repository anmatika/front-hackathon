import React, { Component } from "react";
import LineChart from "./Components/LineChart";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Drill All The Humans</h1>
        </header>
        <p className="App-intro">
          <LineChart />
        </p>
      </div>
    );
  }
}

export default App;
