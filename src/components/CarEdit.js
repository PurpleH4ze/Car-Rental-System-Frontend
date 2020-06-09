import React, { Component } from "react";
import { Button, InputGroup, Input, Container, Row, Col } from "reactstrap";
import axios from "axios";

class CarEdit extends Component {
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
  componentDidMount() {
    this.getCar();
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
      .put(
        `http://localhost:3000/cars/update/${this.state.carLicensePlate}`,
        car
      )
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
      });

    this.props.history.push("/");
  };

  deleteCar = () => {
    let carId = this.state.carLicensePlate;
    axios
      .delete(`http://localhost:3000/cars/${carId}`)
      .then((res) => {
        this.props.history.push("/");
      })
      .catch((err) => console.log(err));
  };

  getCar = () => {
    let carId = this.props.match.params.id;
    axios
      .get(`http://localhost:3000/cars/${carId}`)
      .then((res) => {
        this.setState(
          {
            carLicensePlate: res.data[0].carLicensePlate,
            carBrand: res.data[0].carBrand,
            carModel: res.data[0].carModel,
            carGearBox: res.data[0].carGearBox,
            category_id: res.data[0].category_id,
            carRatePerDay: res.data[0].carRatePerDay,
          },
          () => {
            console.log(this.state);
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <h3>Edit CAR</h3>
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
                Update Car
              </Button>
              <Button onClick={this.deleteCar} color="danger" size="lg" block>
                Delete Car
              </Button>
              <Button outline block color="primary" href="/admin">
                Back
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default CarEdit;
