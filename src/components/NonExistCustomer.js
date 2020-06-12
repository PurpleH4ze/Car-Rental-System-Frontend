import React, { Component } from "react";
import { InputGroup, Input, Button } from "reactstrap";
class NonExistCustomer extends Component {
  render() {
    return (
      <div>
        <InputGroup>
          <Input name="customerName" placeholder="Name" />
        </InputGroup>
        <br />
        <InputGroup>
          <Input name="customerName" placeholder="LastName" />
        </InputGroup>
        <br />
        <Button
              
              type="submit"
              color="secondary"
              size="lg"
              block
            >
              Rent Car
            </Button>
      </div>
    );
  }
}
export default NonExistCustomer;
