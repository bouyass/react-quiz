import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import IsUserLoggedIn from './userStorage'

function PrivateNavigation({component: Component, ...rest}) {
    return (
        <Route
            {...rest}
            render={props=> IsUserLoggedIn.isloggedin() === 'true' ? 
                <Component {...props}/> : 
                <Redirect to={{ pathname: '/login'}} />
            }
        />
    )
}

export default PrivateNavigation
