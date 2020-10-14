import React, {useState, useEffect} from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

function Login(props) {

    /* state variables declarations */
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const [displayed, setDisplayed] = useState(false)

    /* handlers */
    const handleEmailInput = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordInput = (e) => {
        setPassword(e.target.value)
    } 

    const handleNotifications = (message) => {
        console.log(displayed)
        if(displayed === false){
            NotificationManager.success(message,'',3000)
            setDisplayed(true)
        }
    }

    useEffect(() => {
        if(props.history.location.state !== undefined ){
            handleNotifications(props.history.location.state.notification)
        }
    }, [])

    const handleClick = () => {
        axios.post('http://localhost:2222/login',
                    {
                        email: email,
                        password: password
                    })
                    .then((response) => {
                        setErrors(response.data)
                        if(Object.keys(response.data).length  === 0){
                            props.history.push({
                                pathname: '/',
                                state: {notification: "You've been loged in successfully"}
                            })
                            window.location.replace = "http://localhost:3000/"
                        }
                    })
                    .catch((error) => {console.log(error)})
    }  


    return (
        <div className="login">
            <NotificationContainer />
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
