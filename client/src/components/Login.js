import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

function Login() {
    return (
        <div className="login">
            <h2> LOGIN FORM </h2>
            <form>
                <input type="email" placeholder="Your email"/>
                <input type="password" placeholder="password"/>
            </form>
            <button  class="btn waves-effect waves-light" type="submit" name="action"> Log in  <i class="material-icons input"></i></button>
            <p>Not already member ? <Link to="/signup" >Sign up</Link> </p>
        </div>
    )
}

export default Login
