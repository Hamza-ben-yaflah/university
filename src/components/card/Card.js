import "./card.css";
import React from "react";

function Card({ univer }) {
  return (
    <div>
      <div class="card">
        <div class="card-content">
          <h2 class="card-title">{univer.country}</h2>
          <p class="card-body">{univer.name}</p>
          <a href="#." class="button">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
