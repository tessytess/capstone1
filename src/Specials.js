import React from "react";
import "./Specials.css";
import greekSalad from "./assets/greek-salad.jpg";
import bruschetta from "./assets/bruschetta.jpg";
import lemonDessert from "./assets/lemon-dessert.jpg";

function Specials() {
  const specials = [
    {
      name: "Greek Salad",
      image: greekSalad,
      description: "Crisp lettuce, olives, feta cheese, and our house dressing.",
      price: "$12.99",
    },
    {
      name: "Bruschetta",
      image: bruschetta,
      description: "Grilled bread with garlic, tomatoes, and olive oil.",
      price: "$9.99",
    },
    {
      name: "Lemon Dessert",
      image: lemonDessert,
      description: "A tangy and sweet lemon dessert to finish your meal.",
      price: "$6.50",
    },
  ];

  return (
    <section className="specials-section">
        <div className="container">
      <h2>This Week's Specials</h2>
      <div className="specials-container">
        {specials.map((item, index) => (
          <div className="special-card" key={index}>
            <img src={item.image} alt={item.name} className="special-img" />
            <div className="special-info">
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}

export default Specials;
