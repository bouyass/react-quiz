import React, {useState} from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Login(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])

    const handleEmailInput = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordInput = (e) => {
        setPassword(e.target.value)
    } 

    const handleClick = () => {
        axios.post('http://localhost:2222/login',
                    {
                        email: email,
                        password: password
                    })
                    .then((response) => {
                        setErrors(response.data)
                        if(Object.keys(response.data).length  === 0){
                            window.location.href = "http://localhost:3000/"
                        }
                    })
                    .catch((error) => {console.log(error)})
    }  


    return (
        <div className="login">
            <h2> LOGIN FORM </h2>
            <span class="error"> {errors['db_error'] ? errors['db_error'] : '' } </span>
            <form>
                <input type="email" value={email} onChange={handleEmailInput} placeholder="Your email"/>
                <span class="error"> {errors['wrong_email'] ? errors['wrong_email'] : '' } </span>
                <input type="password" value={password} onChange={handlePasswordInput} placeholder="password"/>
                <span class="error"> {errors['wrong_password'] ? errors['wrong_password'] : '' } </span>
            </form>
            <button onClick={handleClick}  class="btn waves-effect waves-light" type="submit" name="action"> Log in  <i class="material-icons input"></i></button>
            <p>Not already member ? <Link to="/signup" >Sign up</Link> </p>
        </div>
    )
}

export default Login
