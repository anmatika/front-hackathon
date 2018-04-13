import React, { Component } from "react";
import NodesListContainer from "./NodesListContainer";
import LineChart from "./Components/LineChart";
import logo from "./logo.svg";
import "./App.css";
import LoadingSpinner from "./Components/LoadingSpinner";
import service from "./utils/service";
import "bootstrap/dist/css/bootstrap.min.css";

class NodesPage extends Component {
  componentDidMount() {
    service.fetchNodesMock().then(data => {
      this.setState({ data });
    });
  }

  render() {
    return (
      <div>
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
