import React, { Component } from 'react'
import { QuizData } from './Data'
import {Redirect} from 'react-router-dom'
import Quiz from './Quiz'
import { Button, Row, Col } from 'react-bootstrap'
import { Alert } from 'react-bootstrap'
import './QuizScreen.css'
import {Container} from 'react-bootstrap'
import Timer from 'react-compound-timer'
 class QuizScreen extends Component {
constructor(props) {
    super(props)
    this.state = {
        i: 0 ,
        score :0

    }
    
    this.next=this.next.bind(this)
    
    this.add=this.add.bind(this)
    this.handleTimeout = this.handleTimeout.bind(this)
   
}

handleTimeout()
{
    this.setState({
        i :4
    })
}
add()
{
    this.setState ({
        score :this.state.score +1
    })
}
next()
{
    
  this.setState( {
        i : this.state.i +1
  })

}

 




    render() {

        var d ;
        var temp =[] ;
        var l= QuizData.length
        
        var j;
        for(j=0;j<l;j++)
        {
            
           temp.push(<Quiz add1 = {this.add} submit ={this.next} key ={QuizData[j].id} question= {QuizData[j].question} option = {QuizData[j].options} answer = {QuizData[j].answer}/>)
        }
        

            if(this.state.i==4)
            {
            d = "/Result.js/"+ this.state.score;
            return (
               

                <Redirect to = {d}  ></Redirect>
            )
            }
        return (
            <div className = "Navbar">
                
                
            <div className = "first">
               
                 Time left
                <Timer
            initialTime={550000}  direction  = "backward" checkpoints={[
                {
                    time: 0,
                    callback: this.handleTimeout
                }
            ]}
        >
            {( ) => (
              
                    <div>
                        
                        <Timer.Hours /> :
                        <Timer.Minutes /> :
                        <Timer.Seconds />
                        
                    </div>
                    
                   
               
            )}
        </Timer>
       



        

</div>





               <div className = "score">
           <h4 text-align = "center">CURRENT SCORE {this.state.score}</h4>
             
          </div>
                {temp[this.state.i]}
               
            </div>
        )
    }
}

export default QuizScreen
