import React, { useContext, useState, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import cart_icon from "../../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

import nav_dropdown from "../../assets/nav_dropdown.png";
function Navbar() {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };
  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="nav-bar-logo" />
          <p>Vastralaya</p>
        </div>
        <img
          onClick={dropdown_toggle}
          className="nav-dropdown"
          src={nav_dropdown}
          alt=""
        />
        <ul ref={menuRef} className="nav-menu">
          <li
            onClick={() => {
              setMenu("shop");
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              Shop
            </Link>{" "}
            {menu === "shop" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("men");
            }}
          >
            <Link to="/mens" style={{ textDecoration: "none" }}>
              Men
            </Link>{" "}
            {menu === "men" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("womens");
            }}
          >
            <Link to="/womens" style={{ textDecoration: "none" }}>
              Women
            </Link>{" "}
            {menu === "womens" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("kids");
            }}
          >
            <Link to="/kids" style={{ textDecoration: "none" }}>
              Kid
            </Link>{" "}
            {menu === "kids" ? <hr /> : <></>}
          </li>
        </ul>
        <div className="nav-login-cart">
          {localStorage.getItem("auth-token") ? (
            <button
              onClick={() => {
                localStorage.removeItem("auth-token");
                window.location.replace("/");
              }}
            >
              Logout
            </button>
          ) : (
            <Link to="/Login" style={{ textDecoration: "none" }}>
              <button>Login</button>
            </Link>
          )}

          <img src={cart_icon} alt="" />
          <Link to="/Cart" style={{ textDecoration: "none" }}>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
