import React, { useEffect, useState } from "react";
import { animaux, arts, archeologie, bande, cinema} from "./BelowThemes";
import { Card, Icon, Image } from "semantic-ui-react";
import './SubThemes.css'

function SubThemes(props) {

  const subThemes = new Map()
  subThemes.set('animaux', animaux)
  subThemes.set('arts', arts)
  subThemes.set('archeologie', archeologie)
  subThemes.set('bande', bande)
  subThemes.set('cinema', cinema)

  return (
    <div className="subThemes-container">
        <h3> {props.theme} !!,  good choice. Choose a sub topic now and click start</h3>
        <div className="subThemes">
        {subThemes.get(props.theme).map((item) => {
          return (
            <div className="subtheme">
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
