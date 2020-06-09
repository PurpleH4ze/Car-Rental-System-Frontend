import React, { Component } from "react";
import { Input, InputGroup, InputGroupAddon, Button } from "reactstrap";
import axios from "axios";
import ShowCars from "./ShowCars";

class SearchCar extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchKey:"",
            cars:[]
        }
    }

    onChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state.searchKey);
        this.setState({
            searchKey:""
        })
        axios.get(`http://localhost:3000/cars/sortBycarBrand/${this.state.searchKey}`)
        .then((res) => {
            this.setState({
                cars: res.data
            })
        })
        .catch((err) => {
            console.log(err);
        })

    }

  render() {
      const {cars} = this.state;
    return (
      <div>
        <InputGroup>
          <Input onChange={this.onChange} value={this.state.searchKey}  name="searchKey" placeholder="Please enter Car Brand" />
          <InputGroupAddon addonType="append">
            <Button onClick = {this.onSubmit} color="primary">Search Car</Button>
          </InputGroupAddon>
        </InputGroup>
        <br />
        <ShowCars cars={cars} />
      </div>
    );
  }
}
export default SearchCar;
