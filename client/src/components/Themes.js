import React from 'react'
import './Themes.css'

import animaux from "../images/animaux.jpg";
import archeologie from "../images/archeologie.jpg";
import arts from "../images/arts.jpg";
import bande from "../images/bandedessinee.jpg";

import celebrite from "../images/celebrites.jpg";
import cinema from "../images/cinema.jpg";
import culture from "../images/culture.jpg";
import geo from "../images/geo.jpg";

import gastronomie from "../images/gastronomie.jpg";
import histoire from "../images/histoire.png";
import informatique from "../images/informatique.jpg";
import litterature from "../images/litterature.jpg";

import loisirs from "../images/loisirs.jpg";
import musique from "../images/musique.jpg";
import nature from "../images/nature.jpeg";
import pays from "../images/pays.png";

import adulte from "../images/adulte.jpg";
import science from "../images/science.jpg";
import sport from "../images/sport.jpg";
import tele from "../images/tele.jpg";

import tourisme from "../images/tourisme.jpg";
import vie from "../images/vie.png";
import web from "../images/web.jpg";

function Themes(props) {

    return (
        <div className="themes">
        <h3> which topic you want the quiz to be about ?</h3>
        <div className="theme-row">
          <div onClick={props.clickHandler} className="theme">
            <h6>
              <b> ANIMAUX </b>
            </h6>
            <img id="animaux"  src={animaux} />
          </div>
          <div onClick={props.clickHandler} className="theme">
            <h6>
              <b>ARCHÉOLOGIE</b>
            </h6>
            <img id="archeologie" src={archeologie} />
          </div>
          <div onClick={props.clickHandler} className="theme">
            <h6>
              <b>ARTS</b>
            </h6>
            <img id="arts" src={arts} />
          </div>
          
        </div>
        <div className="theme-row">
        <div onClick={props.clickHandler} className="theme">
            <h6>
              <b>BANDE DESSINEE</b>
            </h6>
            <img id="bande" src={bande} />
          </div>
          <div className="theme">
            <h6>
              <b> CÉLÉBRITÉS </b>
            </h6>
            <img src={celebrite} />
          </div>
          <div className="theme">
            <h6>
              <b> GASTRONOMIE </b>
            </h6>
            <img src={gastronomie} />
          </div>
        </div>

        <div className="theme-row">
        <div className="theme">
            <h6>
              <b> POUR ADULTES </b>
            </h6>
            <img src={adulte} />
          </div>
        <div className="theme">
            <h6>
              <b> LOISIRS </b>
            </h6>
            <img src={loisirs} />
          </div>
          <div onClick={props.clickHandler} className="theme">
            <h6>
              <b>BANDE DESSINEE</b>
            </h6>
            <img id="bande" src={bande} />
          </div>
        </div>
        <div className="theme-row">
          
          <div onClick={props.clickHandler} className="theme">
            <h6>
              <b>CINÉMA</b>
            </h6>
            <img id="cinema" src={cinema} />
          </div>
          <div className="theme">
            <h6>
              <b>CULTURE GÉNÉRALE</b>
            </h6>
            <img src={culture} />
          </div>
          <div className="theme">
            <h6>
              <b>GÉOGRAPHIE</b>
            </h6>
            <img src={geo} />
          </div>
        </div>

        <div className="theme-row">
         
          <div className="theme">
            <h6>
              <b>HISTOIRE</b>
            </h6>
            <img src={histoire} />
          </div>
          <div className="theme">
            <h6>
              <b>INFORMATIQUE</b>
            </h6>
            <img src={informatique} />
          </div>
          <div className="theme">
            <h6>
              <b>litterature</b>
            </h6>
            <img src={litterature} />
          </div>
        </div>

        <div className="theme-row">
          <div className="theme">
            <h6>
              <b>MUSIQUE</b>
            </h6>
            <img src={musique} />
          </div>
          <div className="theme">
            <h6>
              <b>NATURE</b>
            </h6>
            <img src={nature} />
          </div>
          <div className="theme">
            <h6>
              <b>PAYS DU MONDE</b>
            </h6>
            <img src={pays} />
          </div>
        </div>

        <div className="theme-row">
          <div className="theme">
            <h6>
              <b>SCIENCES</b>
            </h6>
            <img src={science} />
          </div>
          <div className="theme">
            <h6>
              <b>SPORTS</b>
            </h6>
            <img src={sport} />
          </div>
          <div className="theme">
            <h6>
              <b>TÉLÉVISION</b>
            </h6>
            <img src={tele} />
          </div>
        </div>

        <div className="theme-row">
          <div className="theme">
            <h6>
              <b> TOURISME </b>
            </h6>
            <img src={tourisme} />
          </div>
          <div className="theme">
            <h6>
              <b>VIE QUOTIDIENNE</b>
            </h6>
            <img src={vie} />
          </div>
          <div className="theme">
            <h6>
              <b>WEB</b>
            </h6>
            <img src={web} />
          </div>
        </div>
      </div>
    )
}

export default Themes
