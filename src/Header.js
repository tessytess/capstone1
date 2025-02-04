import React from "react";
import logo from "./logo.jpg"

function Header() {
  return (
  <header className="App-header">
  <img src={logo} alt="Little Lemon Logo" className="App-logo" />
  <h1>Welcome to Little Lemon</h1>
</header>
  );
}

export default Header;