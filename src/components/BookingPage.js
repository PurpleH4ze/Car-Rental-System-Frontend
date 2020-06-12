import React, { Component } from "react";
import { InputGroup, Input, Container, Row, Col, Button } from "reactstrap";
import ExistCustomer from "./ExistCustomer";
import NonExistCustomer from "./NonExistCustomer";
import { Link } from "react-router-dom";

class BookingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yes: false,
      no: false,
      carLicensePlate: this.props.match.params.carLicensePlate,
    };
  }
  render() {
    const yes = this.state.yes;
    const no = this.state.no;
    let button;
    if (yes) {
      button = <ExistCustomer carLicensePlate={this.state.carLicensePlate} />;
    } else if (no) {
      button = (
        <NonExistCustomer carLicensePlate={this.state.carLicensePlate} />
      );
    }
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <h3 className="p-2 text-center flex-fill">Booking</h3>
            <h5 className="p-2 text-center flex-fill">
              Do you already have registration ?
            </h5>
            <Row>
              <Link
                onClick={() => this.setState({ yes: true })}
                className="btn btn-success btn-lg col"
                to={`/bookingpage/existcustomer/${this.state.carLicensePlate}`}
              >
                Yes
              </Link>
              <Button
                outline
                color="info"
                onClick={() => this.setState({ no: true })}
                className="btn-lg col"
              >
                No
              </Button>
            </Row>
            {button}
          </Col>
        </Row>
      </Container>
    );
  }
}
export default BookingPage;
