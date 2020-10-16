import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footer-container"> 
            <div className="info-container">
                <div className="info">
                    <h6 className="title">Lyes Quiz</h6>
                    <ul className="list">
                        <li>Accueil</li>
                        <li>A propos</li>
                        <li>Nous joindre</li>
                    </ul>
                </div>

                <div className="info">
                    <h6 className="title">Categories</h6>
                    <ul className="list">
                        <li>Animaux</li>
                        <li>Arts</li>
                        <li>pays</li>
                        <li>bande dessinee</li>
                    </ul>
                </div>

                <div className="info">
                    <h6 className="title">Lyes Quiz</h6>
                    <ul className="list">
                        <li>Accueil</li>
                        <li>A propos</li>
                        <li>Nous joindre</li>
                    </ul>
                </div>

                <div className="info">
                    <h6 className="title">Légal</h6>
                    <ul className="list">
                        <li>Politique de confidentialité</li>
                        <li>Crédit</li>
                        <li>Sauvegarde des données</li>
                    </ul>
                </div>
            </div>
            <div className="socialMedia-copyrights-container">
                <div className="social-media"> <div className="social"> <i class="material-icons">language</i> <span className="social-text">Facebook</span></div><div className="social"><i class="material-icons">language</i> <span className="social-text">Twitter</span> </div>  </div>
                <div className="copyrights"> © 2020 Lyes Quiz  </div>
            </div>
        </div>
    )
}

export default Footer
