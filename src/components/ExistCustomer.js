import React, { Component } from "react";
import { InputGroup, Input, Button } from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

class ExistCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingPickUpDateTime: new Date(),
      bookingReturnDateTime: new Date(),
      customer_id: "",
      carLicensePlate: this.props.carLicensePlate,
      category_id: this.props.car_category_id,
      name: "",
      lastName: "",
      verification: false,
    };
  }

  getCustomerId = () => {
    axios
      .get(
        `http://localhost:3000/customers/${this.state.name}/${this.state.lastName}`
      )
      .then((res) => {
        this.setState({
          verification: true,
          customer_id: res.data[0].id_customer,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(this.state.customer_id);
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  
  onChangeDate = (startDate) => {
    this.setState({
      bookingPickUpDateTime: startDate,
    });
  };

  onChangeReturnDate = (returnDate) => {
    this.setState({
      bookingReturnDateTime: returnDate,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const booking = {
      bookingPickUpDateTime: this.state.bookingPickUpDateTime,
      bookingReturnDateTime: this.state.bookingReturnDateTime,
      customer_id: this.state.customer_id,
      carLicensePlate: this.state.carLicensePlate,
      car_category_id: this.state.category_id,
    };
    console.log(booking);

    axios
      .post("http://localhost:3000/bookings/addBooking", booking)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
      });
    this.props.history.push("/customerPage");
  };

  render() {
    return (
      <div>
        <br />
        <InputGroup>
          <Input
            name="carLicensePlate"
            onChange={this.onChange}
            placeholder="Car License Plate"
            value={this.state.carLicensePlate}
          />
        </InputGroup>
        <br />
        <InputGroup>
          <Input
            name="name"
            onChange={this.onChange}
            value={this.state.name}
            placeholder="Name"
          />
          {this.state.verification && (
            <i className="material-icons md-36">done</i>
          )}
        </InputGroup>
        <br />
        <InputGroup>
          <Input
            name="lastName"
            onChange={this.onChange}
            value={this.state.lastName}
            placeholder="LastName"
          />
          {this.state.verification && (
            <i className="material-icons md-36">done</i>
          )}
        </InputGroup>
        <br />
        <Button onClick={this.getCustomerId} color="secondary" size="lg" block>
          Verify
        </Button>
        <br />
        <InputGroup>
          <DatePicker
            placeholderText="Click to select a date"
            selected={this.state.bookingPickUpDateTime}
            onChange={this.onChangeDate}
            selectsStart
            showTimeSelect
            timeFormat="HH:mm"
            dateFormat="MMMM d, yyyy HH:mm"
            todayButton="Today"
          />
        </InputGroup>
        <InputGroup>
          <DatePicker
            placeholderText="Click to select a return date"
            selected={this.state.bookingReturnDateTime}
            onChange={this.onChangeReturnDate}
            selectsEnd
            showTimeSelect
            timeFormat="HH:mm"
            dateFormat="MMMM d, yyyy HH:mm"
          />
        </InputGroup>

        <Button
          type="submit"
          onClick={this.onSubmit}
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
export default ExistCustomer;
