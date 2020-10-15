import React from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import './Home.css'

function Home() {

    const handleClick = () => {
        axios.get('http://localhost:2222/test', { headers: {'authorization':'Bearer l'+localStorage.getItem('token')}})
                    .then((response) => {
                       console.log(response.status)
                    })
                    .catch((error) => {
                        if(error.response.status === 403){
                            window.location.replace('/login')
                        }
                    })
    }

    return (
        <div>
            <NavBar />

            <button onClick={handleClick}> Test JWT</button>
        </div>
    )
}

export default Home
