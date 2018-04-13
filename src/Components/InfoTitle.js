import React from "react";

const InfoTitle = ({ dataReady, nodesStatus }) => {
  return <div>{dataReady ? <p>{nodesStatus == true ? "Found issue :(" : "All is good :)"}</p> : "Loading"}</div>;
};

export default InfoTitle;
