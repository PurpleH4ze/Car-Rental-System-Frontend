import React from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  CardSubtitle,
} from "reactstrap";
import { Link } from "react-router-dom";

const ShowCars = (props) => {
  const { cars } = props;

  return (
    <Row xs="2">
      {cars.map((car) => (
        <Col key={car.carLicensePlate}>
          <Card
            className="p-3 m-3"
            body
            inverse
            style={{ backgroundColor: "#333", borderColor: "#333" }}
          >
            <CardTitle className="text-center">
              {car.carBrand} {car.carModel}
            </CardTitle>
            <CardSubtitle>Gear Type: {car.carGearBox}</CardSubtitle>

            <CardText>Rate Per Day: {car.carRatePerDay}</CardText>
            <Link
              className="btn btn-secondary btn-lg col"
              to={`/bookingpage/${car.carLicensePlate}/${car.category_id}`}
            >
              Select Car
            </Link>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
export default ShowCars;
