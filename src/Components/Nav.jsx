import React from "react";
import { Link } from "react-router-dom";
import "./Css_files/Nav.css";
import Contact from "./Contact";
import ccgImg from "../assets/images/CcgLogo.jpg";

const Nav = () => {
  return (
    <div className="nav_container">
      <nav className="navbar">
        <div className="flex-1 justify-between items-center">
          <Link to="/auth">
            <img src={ccgImg} />
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
        </ul>
        {/*menu button to the right*/}
        <div>
          <button className="button_style">Order Online</button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
