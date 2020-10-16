import React, { useEffect, useState, useCallback } from "react";
import "./Quiz.css";
import Themes from './Themes'
import SubThemes from './SubThemes'

import { Tooltip } from "@material-ui/core";
import { Link } from "react-router-dom";


function Quiz() {
  const [level, setLevel] = useState("debutant");
  const [theme, setTheme] = useState("none")


  const handleLevelClick = (e) => {
        document.getElementById(level).style.border = "3px solid #fff"
        setLevel(e.target.value)
  };

  const handleThemeClick = (e) => {
        setTheme(e.target.id)
  }

  useEffect(() => {
     document.getElementById(level).style.border = "3px solid green"
  }, [level, theme])


  return (
    <div className="quiz-container">
      <div className="levels">
        <h3> which difficulty you want the quiz to be ? </h3>
        <div className="buttons">
          <Tooltip title="QUiz with easy questions, accessible to everyone, with questions of 4 suggestions">
            <button id="debutant" value="debutant" onClick={handleLevelClick}>
              DEBUTANT
            </button>
          </Tooltip>
          <Tooltip
            title="QUiz with medium difficulty questions, accessible to people who have specific informations 
            about the topic, with questions of 3 suggestions"
          >
            <button id="confirme" value="confirme" onClick={handleLevelClick}>
              CONFIRME
            </button>
          </Tooltip>
          <Tooltip title="QUiz with easy questions, only for people who master the topic, with questions of only 2 suggestions">
            <button id="expert" value="expert" onClick={handleLevelClick}>
              EXPERT
            </button>
          </Tooltip>
        </div>
        <br />
      </div>
      {theme === "none" ? <Themes clickHandler={handleThemeClick} /> : '' }
      {theme !== "none" ? <SubThemes theme={theme} /> : ''}
      <br />
      <br />
    </div>
  );
}

export default Quiz;
