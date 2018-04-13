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
    service.fetchNodes().then(d => {
      const f = Object.keys(d)[0];
      /*       const k = f.replace(/(\r\n\t|\n|\r\t)/gm, ""); */
      // preserve newlines, etc - use valid JSON
      /*  let s = f
        .replace(/\\n/g, "\\n")
        .replace(/\\'/g, "\\'")
        .replace(/\\"/g, '\\"')
        .replace(/\\&/g, "\\&")
        .replace(/\\r/g, "\\r")
        .replace(/\\t/g, "\\t")
        .replace(/\\b/g, "\\b")
        .replace(/\\f/g, "\\f"); */
      // remove non-printable and other non-valid JSON chars
      /*       s = s.replace(/[\u0000-\u0019]+/g, ""); */
      const data = JSON.parse(f);
      debugger;
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
