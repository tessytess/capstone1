import React from "react";
import "./Nav.css";  // ✅ Import CSS
import logo from "./assets/logo.jpg"

function Nav() {
  return (
    <nav className="nav">
      {/* Logo Section */}
      <div className="logo">
        <img src={logo} alt="Little Lemon Logo" />
      </div>

      {/* Navigation Links Section */}
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/contact">Reservations</a></li>
        <li><a href="/contact">Order Online</a></li>
        <li><a href="/contact">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
