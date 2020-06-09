import React, { Component } from 'react';
import {Button} from 'reactstrap';

class Search extends Component {
    //TODO search options need to add
    render() {
        return (
            <div>
                <Button className="m-3" color="primary">Most Expensive</Button>
                <Button className="m-3" color="primary">Most Cheap</Button>
            </div>
        )
    }
}
export default Search;