import React from "react";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";

const BookingListItem = (props) => {
  console.log(props);
  const { bookings } = props;

  return (
    <div>
      <Table bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Booking PickUp Date Time</th>
            <th>Booking Return Date Time</th>
            <th>Price</th>
            <th>Customer Id</th>
            <th>Car License Plate</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, i) => (
            <tr key={booking.booking_id}>
              <th scope="row">{i + 1}</th>
              <td>{booking.bookingPickupDateTime.slice(0, 19).replace('T', ' ')}</td>
              <td>{booking.bookingReturnDateTime.slice(0, 19).replace('T', ' ')}</td>
              <td>{booking.price}</td>
              <td><Link to={`customerEdit/${booking.customer_id}`}>{booking.customer_id}</Link></td>
              <td>{booking.carLicensePlate}</td>
              <Link
                className="btn btn-secondary"
                to={`/bookingsEdit/${booking.booking_id}`}
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
export default BookingListItem;
