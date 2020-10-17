import React, {useEffect, useState} from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import GameBoard from './GameBoard'


function Game(props) {

    const [difficulty, setDifficulty] = useState('none')
    const [theme, setTheme] = useState('none')
    const [subTheme, setSubTheme] = useState('none')

    useEffect(() => {
        if(props.history.location.state !== undefined){
            setDifficulty(props.history.location.state.level)

            setTheme(props.history.location.state.theme)
        }
        setSubTheme(props.match.params[0])
    })

    return (
        <div>
            <NavBar />
            <GameBoard difficulty={0} theme="animaux" subTheme={subTheme} />
            <Footer />
        </div>
    )
}
export default Game
