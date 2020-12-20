import React from "react";
import { Link } from "react-router-dom";

import "./Card.css";

export default function Card({ name, id, image }) {
  return (
    <Link className="card" to={`character/${id}`}>
      <div className="card__content-container">
        <h2 className="card__title">{name}</h2>
        <img className="card__image" src={image} alt={name} />
      </div>
    </Link>
  );
}
