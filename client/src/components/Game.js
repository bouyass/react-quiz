import React, {useEffect, useState} from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import GameBoard from './GameBoard'


function Game(props) {

    const [difficulty, setDifficulty] = useState('none')
    const [theme, setTheme] = useState('none')
    const [subTheme, setSubTheme] = useState('none')

    useEffect(() => {
        
    })

    return (
        <div>
            <NavBar />
            <GameBoard difficulty="debutant" theme="cinema" subTheme="clintEastwood" />
            <Footer />
        </div>
    )
}
export default Game
