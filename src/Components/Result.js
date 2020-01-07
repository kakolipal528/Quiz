import React, { Component } from 'react'
import  {Container}  from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import './Display.css'

 class Result extends Component {
    render() {
        
        return (
       
            <div className="jumbotron vertical-center">
            <div className = "Display">
              
                <Container>
                <Row >
        
    <Col >YOUR RESULT IS<h1>{'\n'}</h1></Col></Row>
   
        <Row > <Button variant= "dark" size ="lg" block >{this.props.match.params.score}</Button></Row>
            
            </Container>
           
            </div>
            </div>
        )
    }
}

export default Result
