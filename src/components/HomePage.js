import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <Container>
        <h2 className="p-2 text-center flex-fill">Which one are you ?</h2>
        <Row>
        <Link className="btn btn-primary btn-lg col" to={"/admin"} >
          Admin
          </Link>
          <Link className="btn btn-secondary btn-lg col" to={"/customerPage"} >
          Customer
          </Link>
        </Row>
        
      </Container>
    );
  }
}
