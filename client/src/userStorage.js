var IsUserLoggedIn = (function(){

    var isLoggedIn = function(){
        return localStorage.getItem('login')
    }

    return {
        isloggedin : isLoggedIn,
    }
})()

export default IsUserLoggedIn