import React, { useEffect } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import Quiz from './Quiz'
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
            <NavBar handleLogout={handleLogout}/>
            <Quiz />
            <Footer />
        </div>
    )
}

export default Home
