import React, { Component } from 'react';
import {Button, Container, Row} from 'reactstrap';
import ShowCars from './ShowCars';
import axios from 'axios';

class Search extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            cars:[]
        }
    }
    onClickExpensive = e =>{
        axios.get('http://localhost:3000/cars/sortByMostExpensive')
        .then((res) => {
            this.setState({
                cars: res.data
            })
        })
        .catch((err) => {
            console.log(err);
        })
        console.log('most expensive cars is fetched ! !')
    }

    onClickCheap = e =>{
        axios.get('http://localhost:3000/cars/sortByMostCheap')
        .then((res) => {
            this.setState({
                cars: res.data
            })
        })
        .catch((err) => {
            console.log(err);
        })
        console.log('most cheap cars is fetched ! !')

    }

    render() {
        const {cars} = this.state;
        return (
            <Container>
               <Button onClick={this.onClickExpensive} className="m-3" color="primary">Most Expensive</Button>
                <Button onClick={this.onClickCheap} className="m-3" color="primary">Most Cheap</Button>
                    <ShowCars cars={cars} />
            </Container>
        )
    }
}
export default Search;