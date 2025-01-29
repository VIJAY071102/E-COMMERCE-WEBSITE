import React from "react";
import "./Navbar.css";
import nav_logo from "../../assets/nav-logo.svg";
import nav_profile from "../../assets/nav-profile.svg";
function Navbar() {
  return (
    <div className="navbar">
      <img src={nav_logo} alt="nav_icon" className="nav-logo" />
      <img src={nav_profile} alt="na_profile" className="nav-profile" />
    </div>
  );
}

export default Navbar;
