import React, { Component } from "react";
import NavBar from "./NavBar";
import { Container } from "reactstrap";
import axios from "axios";
import BookingListItem from "./BookingListItem";

class BookingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: [],
    };
  }
  componentDidMount() {
    this.getAllBooking();
  }
  getAllBooking = () => {
    axios
      .get("http://localhost:3000/bookings")
      .then((res) => {
        this.setState({
          bookings: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <Container>
        <NavBar />
        <BookingListItem bookings={this.state.bookings} />
      </Container>
    );
  }
}
export default BookingList;
