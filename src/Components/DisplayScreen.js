import React, { Component } from 'react'
import { Link ,Redirect} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import  {Container}  from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import './Display.css'
import 'bootstrap/dist/css/bootstrap.min.css';
 class DisplayScreen extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
             red : false,
             blue :false
         }
         this.handleClick=this.handleClick.bind(this)

        
     }
     handleClick()
     {
      this.setState ({
          red:true
      })
     }
    render() {
        if(this.state.red===true)
        return (
            <Redirect to = "/QuizScreen.js"></Redirect>
        )
        return (
            <div className="jumbotron vertical-center">
            <div className = "Display">
              
                <Container>
                <Row >
        
    <Col >START THE QUIZ BY CLICKING THE BELOW BUTTON <h1>{'\n'}</h1></Col></Row>
             <Row > <Button variant= "dark" size ="lg" block onClick ={this.handleClick} >  START</Button></Row>
            
            </Container>
           
            </div>
            </div>
        )
    }
}

export default DisplayScreen
