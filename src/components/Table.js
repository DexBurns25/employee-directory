import React from "react";
import { MDBDataTable } from "mdbreact";
import data from "../data";

const Table = () => {
  return <MDBDataTable striped bordered small data={data} />;
};

export default Table;