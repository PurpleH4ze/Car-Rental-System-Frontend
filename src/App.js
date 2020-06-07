import React from "react";
import { Container } from "reactstrap";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddCustomer from "./components/AddCustomer";
import AddCar from "./components/AddCar";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <Container>
        <NavBar />
        <br />
        <Route path="/" exact component={HomePage} />
        <Route path="/addCustomer" component={AddCustomer} />
        <Route path="/addCar" component={AddCar} />
      </Container>
    </Router>
  );
}

export default App;