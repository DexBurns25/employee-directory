import React, { Component } from "react";

import Jumbotron from "./components/Jumbotron";
import Table from "./components/Table";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Jumbotron />
        <Table />
      </div>
    );
  }
}

export default App;