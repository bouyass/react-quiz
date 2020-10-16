import React from 'react'
import './GameBoard.css'

export default function GameBoard(props) {
    return (
        <div className="game-container">
            <div className="gameBoard">
                <div className="infoSection">
                    <ul>
                        <li><span class="info-item"><b>Difficulty:</b> </span> {props.difficulty} </li>
                        <li> <span class="info-item"><b>Category:</b></span> {props.theme} </li>
                        <li><span class="info-item"><b>Sub Category:</b></span> {props.subTheme} </li>
                        <li><span class="info-item"><b>Total time:</b></span> 08:56  </li>
                        <li><span class="info-item"><b>Remaining questions:</b></span> 15</li>
                    </ul>
                </div>

                <div className="questionSection">
                    <div className="question-container">
                        
                    </div>
                </div>

            </div>
        </div>
    )
}
