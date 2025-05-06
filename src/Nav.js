// Nav.js
import React from "react";
import { Link } from "react-router-dom";        // ← import Link
import "./Nav.css";
import logo from "./assets/logo.jpg";

function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Little Lemon Logo" />
          </Link>
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/reservations">Reservations</Link></li>   {/* ← Now a client‑side link */}
          <li><Link to="/orderonline">Order Online</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;