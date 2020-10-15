import React, { useEffect } from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import './Home.css'
import IsUserLoggedIn from '../userStorage'

function Home() {

    const handleClick = () => {
        console.log(IsUserLoggedIn.isloggedin())
        if(IsUserLoggedIn.isloggedin() === "true"){
            axios.get('http://localhost:2222/test', { headers: {'authorization':'Bearer '+localStorage.getItem('token')}})
                    .then((response) => {
                       console.log(response.status)
                    })
                    .catch((error) => {
                        if(error.response.status === 403){
                            localStorage.setItem('login', false)
                            window.location.replace('/login')
                        }
                    })
        }else{
            window.location.replace('/login')
        }
    }

    const handleLogout = () => {
        localStorage.setItem('login', false)
        window.location.replace('/login')
    }


    return (
        <div>
            <NavBar />

            <button onClick={handleClick}> Test JWT</button>
            <button onClick={handleLogout}> Log out</button>
        </div>
    )
}

export default Home
