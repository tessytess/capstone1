// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";  // ← no BrowserRouter here

import "./App.css";
import Nav from "./Nav";
import Footer from "./Footer";

import Main from "./Main";
import BookingPage from "./BookingPage";
import ConfirmedBooking from './ConfirmedBooking';
import About from "./About";
import Menu from "./Menu";
import OrderOnline from "./OrderOnline";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/"             element={<Main />} />
        <Route path="/about"        element={<About />} />
        <Route path="/menu"         element={<Menu />} />
        <Route path="/reservations" element={<BookingPage />} />
        <Route path="/reservations/confirmed" element={<ConfirmedBooking />} />
        <Route path="/orderonline"  element={<OrderOnline />} />
        <Route path="/login"        element={<Login />} />
        <Route path="*"             element={<h2>404: Not Found</h2>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;