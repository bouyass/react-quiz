import React, { useEffect, useState } from "react";
import "./GameBoard.css";
import { abeilles } from "./quizs/animaux";


export default class GameBoard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            nbrQuestion: 0,
            currentQuestion: 'Lyes est la',
            suggestions: ['suggestions 1', 'suggestions 2', 'suggestions 3', 'suggestions 4'],
            currentQuiz: [abeilles[0]],
        }
        console.log(this.state.currentQuiz)
    }


    componentDidMount = () => {
        
    } 

    clickHandler = (e) => {
        this.setState({
            nbrQuestion : this.nbrQuestion + 1
        })
        console.log(this.state.currentQuiz[this.state.nbrQuestion][this.state.nbrQuestion])
    }


    render(){
        return(
            <div className="game-container">
            <div className="gameBoard">
              <div className="infoSection">
                <ul>
                  <li>
                    <span className="info-item">
                      <b>Difficulty:</b>{" "}
                    </span>{" "}
                    {this.props.difficulty}{" "}
                  </li>
                  <li>
                    {" "}
                    <span className="info-item">
                      <b>Category:</b>
                    </span>{" "}
                    {this.props.theme}{" "}
                  </li>
                  <li>
                    <span className="info-item">
                      <b>Sub Category:</b>
                    </span>{" "}
                    {this.props.subTheme}{" "}
                  </li>
                  <li>
                    <span className="info-item">
                      <b>Total time:</b>
                    </span>{" "}
                    08:56{" "}
                  </li>
                  <li>
                    <span className="info-item">
                      <b>Remaining questions:</b>
                    </span>{" "}
                    15
                  </li>
                </ul>
              </div>
      
              <div className="questionSection">
                <div className="question-header">
                  <p>Time: 08:56</p>
                  <p>Question: {this.state.nbrQuestion+1}/10</p>
                </div>
      
                <div className="question-container">
                    
                  <div className="question">
                    <p>
                      <b>
                         {this.state.currentQuiz[this.state.nbrQuestion][this.state.nbrQuestion].question}
                      </b>{" "}
                    </p>
                  </div>
      
                  <div className="suggestions">
                    <p onClick={this.clickHandler}  id={this.state.currentQuiz[this.state.nbrQuestion][this.state.nbrQuestion].propositions[0]} className="suggestion">
                      <span className="suggestionsPuce"> A&nbsp;&nbsp; </span>{" "}
                          {this.state.currentQuiz[this.state.nbrQuestion][this.state.nbrQuestion].propositions[0]}
                    </p>
                    <p onClick={this.clickHandler}  id={this.state.currentQuiz[this.state.nbrQuestion][this.state.nbrQuestion].propositions[1]}  className="suggestion">
                      <span className="suggestionsPuce"> B&nbsp;&nbsp; </span>
                          {this.state.currentQuiz[this.state.nbrQuestion][this.state.nbrQuestion].propositions[1]}    
                    </p>
                    <p onClick={this.clickHandler}  id={this.state.currentQuiz[this.state.nbrQuestion][this.state.nbrQuestion].propositions[2]}  className="suggestion">
                      <span className="suggestionsPuce"> C&nbsp;&nbsp; </span>
                          {this.state.currentQuiz[this.state.nbrQuestion][this.state.nbrQuestion].propositions[2]}
                    </p>
                    <p onClick={this.clickHandler}  id={this.state.currentQuiz[this.state.nbrQuestion][this.state.nbrQuestion].propositions[3]}  className="suggestion">
                      <span className="suggestionsPuce"> D&nbsp;&nbsp; </span>
                          {this.state.currentQuiz[this.state.nbrQuestion][this.state.nbrQuestion].propositions[3]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
