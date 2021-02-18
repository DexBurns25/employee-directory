import React from "react";
import { MDBJumbotron } from "mdbreact";

const Jumbotron = () => {
  return (
    <MDBJumbotron>
      <h2 className="h1 display-3">Employee Directory</h2>
      <p className="lead">
        Here is a table showing you all your current employees, here you will
        find all the information you could potentionally would need as a
        manager.
      </p>
    </MDBJumbotron>
  );
};

export default Jumbotron;