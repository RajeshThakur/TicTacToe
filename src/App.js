import React, { Component } from 'react';
// import logo from './logo.svg';
import './bootstrap.min.css';
import './App.css';


// import Button from 'react-bootstrap/lib/Button';
// import Grid from 'react-bootstrap/lib/Grid';
// import Row from 'react-bootstrap/lib/Row';
// import Col from 'react-bootstrap/lib/Col';

import {Container, Button, Row, Col, Grid } from 'reactstrap';

import Cell from './Cell.js';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      
    }
  }




  render() {
    return (
      <div className="App">
        <Container className="main-box">
          <h1 className="first-heading">Tic-Tac-Toe</h1>

                 
           <Cell></Cell>     
         
          <Row className="mx-width">
            <Col xs="4" className="player-x">
              <p>Player X </p>
              <span id="x">0</span>
            </Col>

            <Col xs="4" className="player-y">
              <p> Player O </p>
              <span id="o">0</span>
            </Col>

            <Col xs="4" className="player-y">
              <p> Tie </p>
              <span id="t">0</span>
            </Col>
          </Row>




        </Container> 
      </div>
    );
  }
}

export default App;
