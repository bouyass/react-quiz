import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
           <h4> Lyes Quiz </h4>
           <i class="logo material-icons">extension</i>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item"><i class="material-icons">perm_identity</i> Profile</li>
          <li className="navbar-item"> <i class="material-icons">input</i> Logout </li>
        </ul>
        <div className="navbar-icon">
          <i class="material-icons">menu</i>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
