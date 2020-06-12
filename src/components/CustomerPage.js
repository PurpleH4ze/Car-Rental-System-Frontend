import React, { Component } from "react";
import { Container} from "reactstrap";
import NavBarCust from "./NavBarCust";
import SearchCar from "./SearchCar";

class CustomerPage extends Component {
  render() {
    return (
      <Container>
        <NavBarCust />
        <h2 className="p-2 text-center flex-fill">Rent A Car</h2>
        <SearchCar history={this.props.history} location = {this.props.location} />
      </Container>
    );
  }
}
export default CustomerPage;
