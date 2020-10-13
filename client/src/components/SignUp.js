import React, {useState} from 'react'
import './SignUp.css'
import {Link} from 'react-router-dom'
import axios from 'axios'

function SignUp(props) {

    /* declaring state variables */ 
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [confirmEmail, setConfirmEmail] = useState('')
    const [password, setpassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [errors, setErrors] = useState([])


    /* form submission handler */ 
    const clickHandler = () => {
        axios.post('http://localhost:2222/signup',
                    {
                        username: username,
                        email: email,
                        confirmEmail: confirmEmail,
                        password: password,
                        confirmPassword: confirmPassword
                    })
                    .then(response => {
                        setErrors(response.data)
                        if(Object.keys(response.data).length === 0){
                            window.location.href="http://localhost:3000/login"
                        }
                        
                    })
                    .catch(error => console.log(error))
    }

    /* updating the input values  */ 
    const usernameHandler = (e) => {
        setUsername(e.target.value)
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
    }

    const confirmEmailHandler = (e) => {
        setConfirmEmail(e.target.value)
    }

    const passwordHandler = (e) => {
        setpassword(e.target.value)
    }

    const confirmPasswordHandler = (e) => {
        setconfirmPassword(e.target.value)
    }

    return (
        <div className="container">
            <h2> SIGN UP FORM </h2>
            <h4 class="error"> {errors['db_error'] ? errors['db_error'] : ''} </h4>
            <form>
                <input value={username} onChange={usernameHandler} type="text" placeholder="Your username"/>
                <span class="error">{errors['usernameExist'] ? errors['usernameExist'] : ''}</span>
                <span class="error">{errors['username_empty'] ? errors['username_empty'] : ''}</span>
                <input value={email} onChange={emailHandler} type="email" placeholder="Your email"/>
                <span class="error">{errors['emailExist'] ? errors['emailExist'] : ''}</span>
                <span class="error">{errors['email_error'] ? errors['email_error'] : ''}</span>
                <input value={confirmEmail} onChange={confirmEmailHandler} type="email" placeholder="Confirm your email"/>
                <span class="error">{errors['confirmEmail'] ? errors['confirmEmail'] : ''}</span>
                <input value={password} onChange={passwordHandler} type="password" placeholder="Your password"/>
                <span class="error">{errors['password_length'] ? errors['password_length'] : ''}</span>
                <input value={confirmPassword} onChange={confirmPasswordHandler} type="password" placeholder="Confirm your password"/>
                <span class="error">{errors['confirmPassword'] ? errors['confirmPassword'] : ''}</span>
            </form>
            <button onClick={clickHandler} class="btn waves-effect waves-light" type="submit" name="action">Submit <i class="material-icons right">send</i></button>
            <p>Already member ? <Link to="/login" >Log in</Link> </p>
        </div>
    )
}

export default SignUp
