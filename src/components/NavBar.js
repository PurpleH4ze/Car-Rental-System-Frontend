import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar className="navbar navbar-dark bg-dark" light expand="lg">
          <NavbarBrand href="/">Car Rental</NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/addCustomer">Add Customer</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/addCar">Add Car</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default NavBar;
