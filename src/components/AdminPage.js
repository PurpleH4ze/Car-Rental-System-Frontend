import React, { Component } from "react";
import { Container } from "reactstrap";
import CarList from "./CarList";
import NavBar from "./NavBar";

class AdminPage extends Component {
  render() {
    return (
      <Container>
        <NavBar />
        <h2 className="p-2 text-center flex-fill">Rent A Car</h2>
        <CarList />
      </Container>
    );
  }
}
export default AdminPage;
