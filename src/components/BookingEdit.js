import React, { Component } from "react";
import { InputGroup, Input, Button, Row, Container, Col } from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

class BookingEdit extends Component {
    constructor(props){
        super(props);
        this.state = {
            booking_id: this.props.match.params.bookingId,
            bookingPickUpDateTime: new Date(),
            bookingReturnDateTime: new Date(),
            customer_id: "",
            carLicensePlate: "",
            category_id: "",
            price: "",
        }
    }
    componentDidMount() {
        this.getBooking();
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        const booking = {
            bookingPickUpDateTime: this.state.bookingPickUpDateTime,
            bookingReturnDateTime: this.state.bookingReturnDateTime,
            price: this.state.price
          };
          console.log(booking);

          axios.put(`http://localhost:3000/bookings/update/${this.state.booking_id}`, booking)
          .then((res) => console.log(res.data))
         .catch((err) => {
             console.log(err);
      });
      this.props.history.goBack();
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
    

    getBooking = () => {
        axios.get(`http://localhost:3000/bookings/${this.state.booking_id}`)
        .then((res) => {
            console.log(res.data);
            const pickupDate = new Date(`${res.data[0].bookingPickupDateTime}`).toString();
            const returnDate = new Date(`${res.data[0].bookingReturnDateTime}`).toString();
            this.setState({
                bookingPickUpDateTime: new Date(pickupDate),
                bookingReturnDateTime: new Date(returnDate),
                carLicensePlate: res.data[0].carLicensePlate,
                customer_id: res.data[0].customer_id,
                category_id: res.data[0].car_category_id,
                price: res.data[0].price,
            });
            console.log(this.state);
          })
          .catch((err) => {
            console.log(err);
          });
    }
  render() {
    return (
      <Container>
          <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
          <h3>Edit Booking</h3>
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
            name="price"
            onChange={this.onChange}
            value={this.state.price}
            placeholder="Price"
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
        
        <Button
          type="submit"
          onClick={this.onSubmit}
          color="secondary"
          size="lg"
          block
        >
        Update Booking
        </Button>
        
        <Button
          onClick={()=> this.props.history.goBack()}
          color="primary"
          size="lg"
          block
          outline  
        >
        Back
        </Button>
        </Col>
        </Row>
      </Container>
    );
  }
}
export default BookingEdit;
