import React from "react";
import "./Main.css";
import restauranfood from  "./assets/restauranfood.jpg"

function Main() {
  return (
    <main className="main">
      <div className="content">
        <div className="text-section">
          <h1>Welcome to Little Lemon</h1>
          <p>Fresh Mediterranean cuisine made with love.</p>
        </div>
        <div className="image-section">
          <img src={restauranfood} alt="Delicious Mediterranean Food" className="restaurant-img" />
        </div>
      </div>
    </main>
  );
}

export default Main;
