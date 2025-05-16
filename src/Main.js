import React from "react";
import "./Main.css";
import restauranfood from  "./assets/restauranfood.jpg"
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';

function Main() {
  return (
    <main className="main">
       <div className="main-container">
      <div className="content">
        <div className="text-section">
          <h1>Little Lemon</h1>
          <h2 className="subheading">Chicago</h2>
          <h5 className="description">Fresh Mediterranean cuisine made with love.</h5>
        </div>
        <div className="image-section">
          <img src={restauranfood} alt="Delicious Mediterranean Food" className="restaurant-img" />
          </div>
        </div>
      </div>

      <Specials />
      <CustomersSay />
      <Chicago />
    </main>
  );
}

export default Main;