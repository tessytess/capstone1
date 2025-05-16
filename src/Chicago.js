// src/chicago.js
import React from 'react';
import chefPhoto from './assets/chefphoto.jpg';
import './Chicago.css';

export default function Chicago() {
  return (
    <section className="chicago">
      <div className="chicago-content">
        <div className="chicago-text">
          <p>
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment. The
            restaurant features a locally-sourced menu with daily specials.
          </p>
        </div>
        <div className="chicago-image">
          <img src={chefPhoto} alt="Little Lemon chef in the kitchen" />
        </div>
      </div>
    </section>
  );
}
