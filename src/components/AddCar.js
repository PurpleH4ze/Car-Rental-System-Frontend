import React, { Component } from "react";
import { InputGroup, Input, Container, Row, Col, Button } from "reactstrap";
import axios from "axios";

class AddCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carLicensePlate: "",
      carBrand: "",
      carModel: "",
      carGearBox: "",
      category_id: "",
      carRatePerDay: "",
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const car = {
      carLicensePlate: this.state.carLicensePlate,
      carBrand: this.state.carBrand,
      carModel: this.state.carModel,
      carGearBox: this.state.carGearBox,
      category_id: this.state.category_id,
      carRatePerDay: this.state.carRatePerDay,
    };
    console.log(car);

    axios
      .post("http://localhost:3000/cars/add", car)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
      });

    this.setState({
      carLicensePlate: "",
      carBrand: "",
      carModel: "",
      carGearBox: "",
      category_id: "",
      carRatePerDay: "",
    });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <h3>Add New Customer</h3>
            <InputGroup>
              <Input
                name="carLicensePlate"
                onChange={this.onChange}
                value={this.state.carLicensePlate}
                placeholder="Car Licence Plate"
              />
            </InputGroup>
            <br />
            <InputGroup>
              <Input
                name="carBrand"
                onChange={this.onChange}
                value={this.state.carBrand}
                placeholder="Car Brand"
              />
            </InputGroup>
            <br />
            <InputGroup>
              <Input
                name="carModel"
                onChange={this.onChange}
                value={this.state.carModel}
                placeholder="Car Model"
              />
            </InputGroup>
            <br />
            <InputGroup>
              <Input
                name="carGearBox"
                onChange={this.onChange}
                value={this.state.carGearBox}
                placeholder="Car Gear Box"
              />
            </InputGroup>
            <br />
            <InputGroup>
              <Input
                name="category_id"
                onChange={this.onChange}
                type="select"
                id="exampleSelect"
              >
                <option>Choose Category</option>
                <option>Lüks</option>
                <option>Ekonomik</option>
                <option>Aile</option>
                <option>Standard</option>
              </Input>
            </InputGroup>
            <br />
            <InputGroup>
              <Input
                name="carRatePerDay"
                onChange={this.onChange}
                value={this.state.carRatePerDay}
                placeholder="Car Rate Per Day"
              />
            </InputGroup>
            <br />
            <Button
              onClick={this.onSubmit}
              type="submit"
              color="secondary"
              size="lg"
              block
            >
              Add Car
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default AddCar;
