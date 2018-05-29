import React, { Component } from 'react';

// import Button from 'react-bootstrap/lib/Button';
// import Grid from 'react-bootstrap/lib/Grid';
// import Row from 'react-bootstrap/lib/Row';
// import Col from 'react-bootstrap/lib/Col';

import { Button, Row, Col,Grid } from 'reactstrap';

import cross from './cross.png';
import circle from './circle.png';


const SingleCell = ({ id, status ,onClick }) => {
   
    return (
        <Col xs={6} md={4} className="list">
            <span id={"cell-"+ id} className="check" data-status={status} onClick={onClick}></span>
        </Col>
    );
}

class Cell extends Component {

    constructor(props) {
        super(props)
        this.state = {
            current : true,
            img: '',
            cells: {
                    'cell-1':'1',
                    'cell-2':'2',
                    'cell-3':'3',
                    'cell-4':'4',
                    'cell-5':'5',
                    'cell-6':'6',
                    'cell-7':'7',
                    'cell-8':'8',
                    'cell-9':'9'
                },
            x: 0,
            o: 0,
            t: 0
        }
       
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    //reset cell states    
    resetGame = (winner = "") => {         
       

        for(var item in this.state.cells){            
            document.getElementById(item).setAttribute('data-status', item);
            document.getElementById(item).removeAttribute('style');
        }

        if (winner === true) {              
            this.state.x = this.state.x + 1;               
            document.getElementById('x').innerHTML = this.state.x;
        }

        if (winner === false) {
            this.state.o = this.state.o + 1; 
            document.getElementById('o').innerHTML = this.state.o;
        }

        if (winner === '') {
            this.state.t =  this.state.t + 1; 
            document.getElementById('t').innerHTML = this.state.t;
        }
       

        this.state.cells = {
                            'cell-1': '1',
                            'cell-2': '2',
                            'cell-3': '3',
                            'cell-4': '4',
                            'cell-5': '5',
                            'cell-6': '6',
                            'cell-7': '7',
                            'cell-8': '8',
                            'cell-9': '9'
                        };
        this.state.current = true;
              
    }
 

    checkStatus = (cellState)=>{

        //1,2,3
        if (cellState['cell-1'] === cellState['cell-2'] && cellState['cell-2'] === cellState['cell-3']) {
            
            if (cellState['cell-1'] === true) alert('X wins');
            if (cellState['cell-1'] === false) alert('O wins');

            this.resetGame(cellState['cell-1']);
        }

        //4,5,6
        if (cellState['cell-4'] === cellState['cell-5'] && cellState['cell-5'] === cellState['cell-6']) {
            
            if (cellState['cell-4'] === true) alert('X wins');
            if (cellState['cell-4'] === false) alert('O wins');

            this.resetGame( cellState['cell-4']);
        }
       
        //7,8,9
        if (cellState['cell-7'] === cellState['cell-8'] && cellState['cell-8'] === cellState['cell-9']) {
            
            if (cellState['cell-7'] === true) alert('X wins');
            if (cellState['cell-7'] === false) alert('O wins');

            this.resetGame( cellState['cell-7']);
        }
       
        //1,4,7
        if (cellState['cell-1'] === cellState['cell-4'] && cellState['cell-4'] === cellState['cell-7']) {
            
            if (cellState['cell-1'] === true) alert('X wins');
            if (cellState['cell-1'] === false) alert('O wins');

            this.resetGame( cellState['cell-1']);
        }
       
        //2,5,8
        if (cellState['cell-2'] === cellState['cell-5'] && cellState['cell-5'] === cellState['cell-8']) {
            
            if (cellState['cell-2'] === true) alert('X wins');
            if (cellState['cell-2'] === false) alert('O wins');

            this.resetGame( cellState['cell-2']);
        }

       
        //3,6,9
        if (cellState['cell-3'] === cellState['cell-6'] && cellState['cell-6'] === cellState['cell-9']) {
            
            if (cellState['cell-3'] === true) alert('X wins');
            if (cellState['cell-3'] === false) alert('O wins');

            this.resetGame( cellState['cell-3']);
        }

        //1,5,9
        if (cellState['cell-1'] === cellState['cell-5'] && cellState['cell-5'] === cellState['cell-9']) {
            
            if (cellState['cell-1'] === true) alert('X wins');
            if (cellState['cell-1'] === false) alert('O wins');

            this.resetGame( cellState['cell-1']);
        }
       
        //3,5,7
        if (cellState['cell-3'] === cellState['cell-5'] && cellState['cell-5'] === cellState['cell-7']) {
            
            if (cellState['cell-3'] === true) alert('X wins');
            if (cellState['cell-3'] === false) alert('O wins');

            this.resetGame( cellState['cell-3']);
        }      
        
    }


    handleClick= (e)=> {           

        var id = e.target.getAttribute('id');     
        
        if ( this.state.cells[id] === true || this.state.cells[id]  === false ){
            alert('Already filled');
            return false;
        }

        if (this.state.current === true){ //for player X
            this.state.img = cross;
            this.state.cells[id] = this.state.current;  
        }
        if (this.state.current === false) {  //for player O
            this.state.img = circle;
            this.state.cells[id] = this.state.current;
        }        

        e.target.style.background = 'url(' + this.state.img + ') no-repeat';
        e.target.setAttribute('data-status', this.state.current);

        //update current player handle            
        this.state.current = !this.state.current;         

        //check for winner
        this.checkStatus(this.state.cells);
        
        var count = 0;
        for(var item in  this.state.cells){
            if (this.state.cells[item] === true || this.state.cells[item] === false) {
                count = count + 1;
            }           
            if (count == 9) {
                alert('its a tie');
                this.resetGame();
                return false;
            }
        };   

        
    }


    render() {

        return(

            <div>
                <div id="cell">
                    <Row>
                        <SingleCell id="1" status='0' onClick={this.handleClick}/>
                        <SingleCell id="2" status='0' onClick={this.handleClick} />
                        <SingleCell id="3" status='0' onClick={this.handleClick} />
                    </Row>

                    <Row>
                        <SingleCell id="4" status='0' onClick={this.handleClick} />
                        <SingleCell id="5" status='0' onClick={this.handleClick} />
                        <SingleCell id="6" status='0' onClick={this.handleClick} />
                    </Row>

                    <Row>
                        <SingleCell id="7" status='0' onClick={this.handleClick} />
                        <SingleCell id="8" status='0' onClick={this.handleClick} />
                        <SingleCell id="9" status='0' onClick={this.handleClick} />
                    </Row>
                </div>

                <div className="row mx-width">
                    <Col sm="12">
                        <Button id="reset" onClick={this.resetGame}>Reset</Button>
                    </Col>
                </div>
            </div>

        )

    }

}

export default Cell;