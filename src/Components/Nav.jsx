import React from "react";
import { Link } from "react-router-dom";
import "./Css_files/Nav.css";
import ccgImg from "../assets/images/CcgLogo.jpg";
import { Avatar } from "react-daisyui";

const Nav = ({ removeToken }) => {
  return (
    <div className="nav_container">
      <nav className="navbar">
        <div className="flex-1 justify-between items-center">
          <Link
            to="/auth"
            style={{
              padding: ".7em",
              backgroundColor: "white",
              borderRadius: "50%",
              filter: "drop-shadow(.2em .2em .5em black)",
            }}
          >
            <img
              style={{
                borderRadius: "30%",
                height: "4em",
                width: "4em",
                objectFit: "contain",
              }}
              src={ccgImg}
              alt="Canyon City Grill logo"
            />
          </Link>
        </div>
        {/*center the links here */}
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
          <li>
            <Link to="/contact">Location</Link>
          </li>
          {localStorage.getItem("myToken") && (
            <li>
              <button className="logout_btn" onClick={() => removeToken()}>
                LogOut
              </button>
            </li>
          )}
        </ul>
        <div>
          <button className="nav_button_style">Order Online</button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
