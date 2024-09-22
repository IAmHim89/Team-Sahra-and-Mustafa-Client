import React from "react";
import { Link } from "react-router-dom";
import "./Css_files/Nav.css";
import Contact from "./Contact";
import ccgLogo from "../assets/images/ccgLogo";

const Nav = () => {
  return (
    <div className="nav_container">
      <nav className="navbar bg-base-100 shadow-md">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl canyon_city"
          >
            {/* placeCCG logo here */}
            <img src={logo} alt="Canyon City Grill" className="h-10 w-auto" />
          </Link>
        </div>
        <div className="flex-none">
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
        </div>
        <div>
          <button className="button_style">Menu</button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
