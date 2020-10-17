import React, {useState} from "react";
import "./NavBar.css";
import IsUserLoggedIn from '../userStorage'
import { Loader } from "semantic-ui-react";
import { Link } from "react-router-dom";

function NavBar(props) {

  const auth = localStorage.getItem('login')
  const [active, setActive] = useState(false)
  


  const handleMenuClick = () => {
    setActive(!active)
    console.log(active)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">


        <div className="navbar-logo">
          <h4> Lyes Quiz </h4>
          <i className="logo material-icons">extension</i>
        </div>

        {auth === 'true' ? 
        <div className="container-2nd">
          <ul className={active ? 'navbar-menu active' : 'navbar-menu'}>
            <li className="navbar-item logged">
              {}
              <i class="material-icons">perm_identity</i> Profile
            </li>
            <li onClick={props.handleLogout} className="navbar-item">
              {" "}
              <i class="material-icons">input</i> Logout{" "}
            </li>
          </ul>
          <div className="navbar-icon">
          <i onClick={handleMenuClick} class="material-icons">{active ? 'clear' : 'view_headline' }</i>
          </div>
        </div>
         :
         <div className="container-2nd">
          <ul className={active ? 'navbar-menu active' : 'navbar-menu'}>
            <li className="navbar-item notLogged">
            <Link to="/signup" ><button className="navbarButton"><b> Sign up </b></button></Link>
            </li>
            <li className="navbar-item">
              <Link to="/login" ><button className="navbarButton"><b> Login </b></button></Link>
            </li>
          </ul>
          <div className="navbar-icon">
               <i onClick={handleMenuClick} className="material-icons">{active ? 'clear' : 'view_headline' }</i>
          </div>
        </div>
}

      </div>
    </nav>
  );
}

export default NavBar;
