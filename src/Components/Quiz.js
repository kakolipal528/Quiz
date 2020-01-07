import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import  {Container}  from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import './Display.css'
import 'bootstrap/dist/css/bootstrap.min.css';
class Quiz extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            choice : ["dark","dark","dark"],
            temp1 : ""
        }
        this.handleClick =this.handleClick.bind(this)
        this.append =this.append.bind(this)
    }
  append()
    {
        
        if(this.props.answer == this.state.temp1)
        this.props.add1();
        this.props.submit();
    }

    handleClick(e,num)
    {
        
        this.state.temp1 =num.number;

        for(var j=0;j<3;j++)
        {    // eslint-disable-next-line
            if(j==e.target.value)
            {
               
            // eslint-disable-next-line
        this.state.choice[j]= "primary"
            }
        else
        {
            // eslint-disable-next-line
        this.state.choice[j]= "dark"
        }

        }
        this.setState(
            {
                choice : this.state.choice,
                temp1 :this.state.temp1
            }
        )
    }

    render(props) {
        
  
        
  
        const val  = this.props.option.map((number,i)=>{
               return  <Button variant= {this.state.choice[i]} value ={i}  size ="lg" block onClick = {(e) => this.handleClick(e,{number}) } >{number}</Button>
               

        }) 

        return (
            <div className="jumbotron vertical-center">
            <div className = "Display">
              
                <Container>
                <Row >
        
    <Col >{this.props.question}</Col></Row>
             <Row >
                <Col>
                
                {val}
               
                <div className ="space">
                <Button variant ="success" size ="lg" onClick = {this.append} >CONFIRM</Button>
                </div>
                </Col>


             </Row>
             <Row>
         
               
             </Row>
            
            </Container>
           
            </div>
            </div>
        )
    }
}

export default Quiz
