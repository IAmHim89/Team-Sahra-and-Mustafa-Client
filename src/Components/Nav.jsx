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
              padding: "1em",
              backgroundColor: "white",
              borderRadius: "70em",
              height: "5em",
              width: "5em",
            }}
          >
            <img
              src={ccgImg}
              className="logo"
              alt="Canyon City Grill logo"
              style={{
                borderRadius: "0",
              }}
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
            <Link to="/contact">Contact</Link>
          </li>
          {localStorage.getItem("myToken") && (
            <li>
              <button onClick={() => removeToken()}>LogOut</button>
            </li>
          )}
        </ul>
        <div>
          <button className="button_style">Order Online</button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
