import React, { useEffect, useState } from "react";
import { animaux, arts, archeologie, bande, cinema} from "./BelowThemes";
import { Card, Icon, Image } from "semantic-ui-react";
import './SubThemes.css'

function SubThemes(props) {

  const [currentSubTheme, setCurrentSubTheme] = useState('none') 

  const subThemes = new Map()
  subThemes.set('animaux', animaux)
  subThemes.set('arts', arts)
  subThemes.set('archeologie', archeologie)
  subThemes.set('bande', bande)
  subThemes.set('cinema', cinema)

  const handleSubThemeClick = (e) => {
     if(currentSubTheme !== "none") document.getElementById(currentSubTheme).style.border =  "2px solid #fff"
     setCurrentSubTheme(e.target.id)
  }

  useEffect(() => {
      if(currentSubTheme !== "none") document.getElementById(currentSubTheme).style.border = "3px solid green"
  }, [currentSubTheme])

  return (
    <div className="subThemes-container">
        <h3> {props.theme} !!,  good choice. Choose a sub topic now and click start</h3>
        <div className="subThemes">
        {subThemes.get(props.theme).map((item) => {
          return (
            <div onClick={handleSubThemeClick} className="subtheme">
              <h6>
                <b> {item.name} </b>
              </h6>
              <img id={item.name} src={item.image} />
            </div>
          );
        })}
    </div>
    </div>
  );
}

export default SubThemes;
