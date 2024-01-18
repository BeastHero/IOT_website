import React from "react";
import "../Styles/NavBar.css";
import logo from "../assets/iotlogo.png";
import { Link } from "react-router-dom";
import { PiPhoneCallFill } from "react-icons/pi";

function NavBar() {
  return (
    <>
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="Iot Innovators Logo" />
        </div>
        <div className="nav_links">
          <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          </ul>
          <button>Contact Us <PiPhoneCallFill  />  </button>
        </div>
      </div>
    </>
  );
}

export default NavBar;
