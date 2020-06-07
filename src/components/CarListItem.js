import React from "react";
import { Table } from "reactstrap";

const CarListItem = (props) => {
  const { cars } = props;
  console.log(cars);
  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Car Brand</th>
            <th>Car Model</th>
            <th>Car Gear Box</th>
            <th>Per Rate Day</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, i) => (
            <tr key={car.carLicensePlate}>
              <th scope="row">{i + 1}</th>
              <td>{car.carBrand}</td>
              <td>{car.carModel}</td>
              <td>{car.carGearBox}</td>
              <td>${car.carRatePerDay}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default CarListItem;
