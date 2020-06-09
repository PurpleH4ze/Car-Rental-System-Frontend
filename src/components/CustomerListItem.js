import React from "react";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";

const CustomerListItem = (props) => {
  console.log(props);
  const { customers } = props;

  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>State</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, i) => (
            <tr key={customer.id_customer}>
              <th scope="row">{i + 1}</th>
              <td>{customer.customerName}</td>
              <td>{customer.customerLastName}</td>
              <td>{customer.customerAge}</td>
              <td>{customer.customerPhoneNumber}</td>
              <td>{customer.customerEmail}</td>
              <td>{customer.customerState}</td>
              <Link
                className="btn btn-secondary"
                to={`/customerEdit/${customer.id_customer}`}
              >
                Details
              </Link>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default CustomerListItem;
