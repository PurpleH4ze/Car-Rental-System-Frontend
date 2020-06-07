import React, { Component } from "react";
import { Container } from "reactstrap";
import CarList from "./CarList";

export default class HomePage extends Component {
  render() {
    return (
      <Container>
        <h2 className="p-2 text-center flex-fill">Rent A Car</h2>
        <CarList />
      </Container>
    );
  }
}
