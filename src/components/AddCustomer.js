import React, { Component } from "react";
import { InputGroup, Input, Container, Row, Col, Button } from "reactstrap";
import axios from "axios";

class AddCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerName: "",
      customerLastName: "",
      customerAge: "",
      customerPhoneNumber: "",
      customerEmail: "",
      customerState: "",
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const customer = {
      customerName: this.state.customerName,
      customerLastName: this.state.customerLastName,
      customerAge: this.state.customerAge,
      customerPhoneNumber: this.state.customerPhoneNumber,
      customerEmail: this.state.customerEmail,
      customerState: this.state.customerState,
    };
    console.log(customer);

    axios
      .post("http://localhost:3000/customers/add", customer)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
      });
    this.setState({
      customerName: "",
      customerLastName: "",
      customerAge: "",
      customerPhoneNumber: "",
      customerEmail: "",
      customerState: "",
    });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <h3>Add New Customer</h3>
            <InputGroup>
              <Input
                name="customerName"
                onChange={this.onChange}
                value={this.state.customerName}
                placeholder="Name"
              />
            </InputGroup>
            <br />
            <InputGroup>
              <Input
                name="customerLastName"
                onChange={this.onChange}
                value={this.state.customerLastName}
                placeholder="LastName"
              />
            </InputGroup>
            <br />
            <InputGroup>
              <Input
                name="customerAge"
                onChange={this.onChange}
                value={this.state.customerAge}
                placeholder="Age"
                min={1}
                type="number"
              />
            </InputGroup>
            <br />
            <InputGroup>
              <Input
                name="customerPhoneNumber"
                onChange={this.onChange}
                value={this.state.customerPhoneNumber}
                placeholder="Phone Number"
              />
            </InputGroup>
            <br />
            <InputGroup>
              <Input
                name="customerEmail"
                onChange={this.onChange}
                value={this.state.customerEmail}
                placeholder="Email"
              />
            </InputGroup>
            <br />
            <InputGroup>
              <Input
                name="customerState"
                onChange={this.onChange}
                value={this.state.customerState}
                placeholder="State"
              />
            </InputGroup>
            <br />
            <Button
              onClick={this.onSubmit}
              type="submit"
              color="secondary"
              size="lg"
              block
            >
              Add Customer
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default AddCustomer;
