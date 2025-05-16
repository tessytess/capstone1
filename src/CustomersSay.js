// src/CustomersSay.js
import React from 'react';
import './CustomersSay.css';

export default function CustomersSay() {
  const reviews = [
    {
      name: "Alice Johnson",
      text: "“Absolutely loved the flavors at Little Lemon! The seafood pasta was to die for.”"
    },
    {
      name: "Brian Lee",
      text: "“The atmosphere is cozy and the staff are incredibly friendly. Highly recommend!”"
    },
    {
      name: "Carmen Smith",
      text: "“Best Mediterranean cuisine I’ve had in years—fresh, vibrant, and delicious.”"
    },
  ];

  return (
    <section className="customers-say" aria-labelledby="customers-say-heading">
      <h2 id="customers-say-heading">What Our Customers Say</h2>
      <div className="reviews">
        {reviews.map((r, i) => (
          <blockquote key={i} className="review">
            <p className="review-text">{r.text}</p>
            <footer className="review-author">— {r.name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
