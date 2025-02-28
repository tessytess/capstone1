import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 Little Lemon. All rights reserved.</p>

      <nav className="footer-nav">
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      <div className="social-links">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </footer>
  );
}

export default Footer;