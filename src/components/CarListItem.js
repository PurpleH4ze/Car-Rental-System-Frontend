import React from "react";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";

const CarListItem = (props) => {
  console.log(props);
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
            <th> </th>
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
              <Link
                className="btn btn-secondary"
                to={`/carEdit/${car.carLicensePlate}`}
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
export default CarListItem;
