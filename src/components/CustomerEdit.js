import React, { Component } from "react";
import { Button, InputGroup, Input, Container, Row, Col } from "reactstrap";
import axios from "axios";

class CustomerEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_customer: "",
      customerName: "",
      customerLastName: "",
      customerAge: "",
      customerPhoneNumber: "",
      customerEmail: "",
      customerState: "",
    };
  }
  componentDidMount() {
    this.getCustomer();
  }

  getCustomer = () => {
    let customerId = this.props.match.params.id;
    axios
      .get(`http://localhost:3000/customers/${customerId}`)
      .then((res) => {
        this.setState(
          {
            id_customer: res.data[0].id_customer,
            customerName: res.data[0].customerName,
            customerLastName: res.data[0].customerLastName,
            customerAge: res.data[0].customerAge,
            customerPhoneNumber: res.data[0].customerPhoneNumber,
            customerEmail: res.data[0].customerEmail,
            customerState: res.data[0].customerState,
          },
          () => {
            console.log(this.state);
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteCustomer = () => {
    let customerId = this.state.id_customer;
    axios
      .delete(`http://localhost:3000/customers/delete/${customerId}`)
      .then((res) => {
        this.props.history.push("/customers");
      })
      .catch((err) => console.log(err));
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const customer = {
      id_customer: this.state.id_customer,
      customerName: this.state.customerName,
      customerLastName: this.state.customerLastName,
      customerAge: this.state.customerAge,
      customerPhoneNumber: this.state.customerPhoneNumber,
      customerEmail: this.state.customerEmail,
      customerState: this.state.customerState,
    };
    console.log(customer);

    axios
      .put(
        `http://localhost:3000/customers/update/${this.state.id_customer}`,
        customer
      )
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
      });

    this.props.history.goBack();
  };

  render() {
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <h3>Edit Customer</h3>
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
              Update Customer
            </Button>
            <Button
              onClick={this.deleteCustomer}
              color="danger"
              size="lg"
              block
            >
              Delete Customer
            </Button>
            <Button outline block color="primary" href="/customers">
              Back
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default CustomerEdit;
