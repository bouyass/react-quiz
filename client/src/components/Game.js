import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import GameBoard from './GameBoard'


function Game() {
    return (
        <div>
            <NavBar />
            <GameBoard difficulty="debutant" theme="cinema" subTheme="clintEastwood" />
            <Footer />
        </div>
    )
}
export default Game
