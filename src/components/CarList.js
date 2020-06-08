import React, { Component } from "react";
import CarListItem from "./CarListItem";
import axios from "axios";

class CarList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [],
    };
  }

  componentDidMount() {
    this.getAllCars();
  }
  getAllCars = () => {
    axios
      .get("http://localhost:3000/cars")
      .then((res) => {
        this.setState({
          cars: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteCar = (id) => {
    axios
      .delete(`http://localhost:3000/cars/${id}`)
      .then((res) => {
        console.log(res);
        this.props.history.push("/");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <CarListItem cars={this.state.cars} />
      </div>
    );
  }
}
export default CarList;
