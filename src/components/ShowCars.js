import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col, CardSubtitle } from "reactstrap";

const ShowCars = (props) => {
  const { cars } = props;

  return (
    <Row xs="2">
      {
          cars.map(car => (
            <Col key = {car.carLicensePlate}>
            <Card className="p-3 m-3"
              body
              inverse
              style={{ backgroundColor: "#333", borderColor: "#333" }}
            >
              <CardTitle className="text-center">{car.carBrand} {car.carModel}</CardTitle>
                <CardSubtitle>Gear Type: {car.carGearBox}</CardSubtitle>

              <CardText>
                Rate Per Day: {car.carRatePerDay}$
              </CardText>
              <Button href="/bookingpage">Select Car</Button>
            </Card>
          </Col>
          ))
      }
    </Row>
  );
};
export default ShowCars;
