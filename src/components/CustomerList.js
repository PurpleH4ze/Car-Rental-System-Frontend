import React, { Component } from "react";
import CustomerListItem from "./CustomerListItem";
import axios from "axios";

class CustomerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
    };
  }
  componentDidMount() {
    this.getAllCustomers();
  }
  getAllCustomers = () => {
    axios
      .get("http://localhost:3000/customers")
      .then((res) => {
        this.setState({
          customers: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <CustomerListItem customers={this.state.customers} />
      </div>
    );
  }
}
export default CustomerList;
