import React from "react";
import { Container } from "reactstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddCustomer from "./components/AddCustomer";
import AddCar from "./components/AddCar";
import HomePage from "./components/HomePage";
import CarEdit from "./components/CarEdit";
import CustomerList from "./components/CustomerList";
import CustomerEdit from "./components/CustomerEdit";
import CustomerPage from "./components/CustomerPage";
import AdminPage from "./components/AdminPage";
import Search from "./components/Search";

function App() {
  return (
    <Router>
      <Container>
        <br />
        <Route path="/" exact component={HomePage} />
        <Route path="/addCustomer" component={AddCustomer} />
        <Route path="/addCar" component={AddCar} />
        <Route path="/carEdit/:id" component={CarEdit} />
        <Route path="/customers" component={CustomerList} />
        <Route path="/customerEdit/:id" component={CustomerEdit} />
        <Route path="/customerPage" component={CustomerPage} />
        <Route path="/customerPage/search" component={Search} />
        <Route path="/admin" component={AdminPage} />
      </Container>
    </Router>
  );
}

export default App;
