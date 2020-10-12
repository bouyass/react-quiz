import React from 'react'
import './SignUp.css'
import {Link} from 'react-router-dom'

function SignUp() {
    return (
        <div className="container">
            <h2> SIGN UP FORM </h2>
            <form>
                <input type="text" placeholder="Your username"/>
                <input type="email" placeholder="Your email"/>
                <input type="email" placeholder="Confirm your email"/>
                <input type="password" placeholder="Your password"/>
                <input type="password" placeholder="Confirm your password"/>
            </form>
            <button class="btn waves-effect waves-light" type="submit" name="action">Submit <i class="material-icons right">send</i></button>
            <p>Already member ? <Link to="/login" >Log in</Link> </p>
        </div>
    )
}

export default SignUp
