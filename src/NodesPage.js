import React, { Component } from "react";
import NodesListContainer from "./NodesListContainer";
import InfoTitle from "./Components/InfoTitle";
import LineChart from "./Components/LineChart";
import logo from "./logo.svg";
import "./App.css";
import LoadingSpinner from "./Components/LoadingSpinner";
import service from "./utils/service";
import "bootstrap/dist/css/bootstrap.min.css";

class NodesPage extends Component {
  componentDidMount() {
    service.zoo().then(d => {
      const data = d.body;
      this.setState({ data });
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
