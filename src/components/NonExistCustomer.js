import React, { Component } from "react";
import { InputGroup, Input, Button } from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

class NonExistCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerName: "",
      customerLastName: "",
      customerAge: "",
      customerPhoneNumber: "",
      customerEmail: "",
      customerState: "",
      bookingPickUpDateTime: new Date(),
      bookingReturnDateTime: new Date(),
      carLicensePlate: this.props.carLicensePlate,
      category_id: this.props.car_category_id,
      customer_id:""
    }
    
  }

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

  //TODO onSubmit function is not working very well, need to be fixed
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    const customer = {
      customerName: this.state.customerName,
      customerLastName: this.state.customerLastName,
      customerAge: this.state.customerAge,
      customerPhoneNumber: this.state.customerPhoneNumber,
      customerEmail: this.state.customerEmail,
      customerState: this.state.customerState,
    };
    console.log(customer);
   
    axios.post("http://localhost:3000/customers/add", customer)
      .then((res) => {
        console.log(res.data)
        this.setState({
          customer_id: res.data
        })
      })
      .catch((err) => {
        console.log(err);
      });

      const booking = {
        bookingPickUpDateTime: this.state.bookingPickUpDateTime,
        bookingReturnDateTime: this.state.bookingReturnDateTime,
        customer_id: this.state.customer_id,
        carLicensePlate: this.state.carLicensePlate,
        car_category_id: this.state.category_id,
      }
      console.log(booking);

      axios.post("http://localhost:3000/bookings/addBooking", booking)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
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
        <br />
        <Button type="submit" onClick={this.onSubmit} color="secondary" size="lg" block>
          Rent Car
        </Button>
      </div>
    );
  }
}
export default NonExistCustomer;
