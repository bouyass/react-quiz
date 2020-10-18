import React, { useEffect, useState } from "react";
import "./GameBoard.css";
import { abeilles } from "./quizs/animaux";
import axios from 'axios'


export default class GameBoard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            gameOver: false,
            nbrQuestion: 0,
            currentQuestion: 'Lyes est la',
            suggestions: ['suggestions 1', 'suggestions 2', 'suggestions 3', 'suggestions 4'],
            currentQuiz: [abeilles[0]],
            totalSeconds:0,
            nbrSeconds:0,
            nbrMinutes:0,
            score: 0
        }
        this.clickHandler = this.clickHandler.bind(this)
        this.time = 0
    }

    timer(){

        this.setState({
            nbrSeconds: this.state.nbrSeconds + 1
        })
        this.setState({
            nbrMinutes: Math.trunc(this.state.nbrSeconds/60),
            nbrSeconds: this.state.nbrSeconds - (this.state.nbrMinutes * 60)
        })
    }
    

    componentDidMount = () => {
        this.time =  setInterval(this.timer.bind(this), 1000)
    } 

    componentWillUnmount = () => {
        clearInterval(this.time)
    }

    clickHandler = (e) => {
        if(e.target.id === this.state.currentQuiz[0][this.state.nbrQuestion].réponse){
            this.setState({
                score: this.state.score + 1
            })
            console.log(this.state.score)
        }
        if(this.state.nbrQuestion < 9){
            this.setState({
                nbrQuestion : this.state.nbrQuestion + 1
            })
        }else{
            this.setState({
                gameOver: true
            })
            clearInterval(this.time)
        }
    }

    init= () => {
        this.setState({
            nbrQuestion : 0,
            gameOver: false,
            nbrSeconds:0,
            nbrMinutes:0,
            score:0
        })
    }

    retryClick = () => {
        this.init()
        this.time =  setInterval(this.timer.bind(this), 1000)
    }

    changeClick = () => {
        this.init()
        window.location.replace('/')
    }

    saveAndChange = () => {
        axios.post('http://localhost:2222/save',
        {
            username: 'lyes',
            score: Math.trunc(this.state.score * 100 / (((this.state.nbrMinutes * 60) + (this.state.nbrSeconds))/2))
        }).then((response ) => {
            this.init()
            window.location.replace('/')
        })
        .catch((error) => console.log(error))
    }


    render(){
        return(
            <div className="game-container">
                {!this.state.gameOver ? 
                <div className="gameBoard">
                <div className="infoSection">
                  <ul>
                    <li>
                      <span className="info-item">
                        <b>Difficulty:</b>
                      </span>
                      {this.props.difficulty}
                    </li>
                    <li>
                      <span className="info-item">
                        <b>Category:</b>
                      </span>
                      {this.props.theme}
                    </li>
                    <li>
                      <span className="info-item">
                        <b>Sub Category:</b>
                      </span>
                      {this.props.subTheme}
                    </li>
                    <li>
                      <span className="info-item">
                        <b>Total time:</b>
                      </span>
                      08:56
                    </li>
                    <li>
                      <span className="info-item">
                        <b>Remaining questions:</b>
                      </span>
                      15
                    </li>
                  </ul>
                </div>
        
                <div className="questionSection">
                  <div className="question-header">
                    <p> Total time  {this.state.nbrMinutes <= 10 ? '0'+this.state.nbrMinutes : this.state.nbrMinutes } : {this.state.nbrSeconds <= 10 ? '0'+this.state.nbrSeconds : this.state.nbrSeconds}  </p>
                    <p>Question: {this.state.nbrQuestion+1}/10</p>
                  </div>
        
                  <div className="question-container">
                      
                    <div className="question">
                      <p>
                        <b>
                           {this.state.currentQuiz[0][this.state.nbrQuestion].question}
                        </b>
                      </p>
                    </div>
        
                    <div className="suggestions">
                      <p onClick={this.clickHandler}  id={this.state.currentQuiz[0][this.state.nbrQuestion].propositions[0]} className="suggestion">
                        <span className="suggestionsPuce"> A&nbsp;&nbsp; </span>
                            {this.state.currentQuiz[0][this.state.nbrQuestion].propositions[0]}
                      </p>
                      <p onClick={this.clickHandler}  id={this.state.currentQuiz[0][this.state.nbrQuestion].propositions[1]}  className="suggestion">
                        <span className="suggestionsPuce"> B&nbsp;&nbsp; </span>
                            {this.state.currentQuiz[0][this.state.nbrQuestion].propositions[1]}    
                      </p>
                      <p onClick={this.clickHandler}  id={this.state.currentQuiz[0][this.state.nbrQuestion].propositions[2]}  className="suggestion">
                        <span className="suggestionsPuce"> C&nbsp;&nbsp; </span>
                            {this.state.currentQuiz[0][this.state.nbrQuestion].propositions[2]}
                      </p>
                      <p onClick={this.clickHandler}  id={this.state.currentQuiz[0][this.state.nbrQuestion].propositions[3]}  className="suggestion">
                        <span className="suggestionsPuce"> D&nbsp;&nbsp; </span>
                            {this.state.currentQuiz[0][this.state.nbrQuestion].propositions[3]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>:
                <div className="finish-container">
                    <div className="score-container">
                    <div className="main-score">
                        <p className="score" >Your score is {Math.trunc(this.state.score * 100 / (((this.state.nbrMinutes * 60) + (this.state.nbrSeconds))/2))}</p>
                        <p className="nbr-questions"> Correct answers <span className={this.state.score >=5 ? 'success-answers' : 'failed-answers'}>{this.state.score}</span> </p>
                    </div>

                    <div className="actions">
                        <button onClick={this.retryClick}> Retry</button>
                        <button onClick={this.changeClick}> change  </button>
                        <button onClick={this.saveAndChange}> save and change</button>
                    </div>
                </div> 
                <div className="image-container">
                        {this.state.score >= 5 ? <div className="success-image"></div> : <div className="fail-image"></div> }
                </div>
                </div> 
            }
          </div>
        )
    }
}
