import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import IsUserLoggedIn from './userStorage'

function CheckNavigation({component: Component, ...rest}) {
    return (
        <Route
            {...rest}
            render={props=> IsUserLoggedIn.isloggedin() === "false" ? 
                    <Component {...props}/> : 
                    <Redirect to={{ pathname: '/'}} />
            }
        />
    )
}

export default CheckNavigation
