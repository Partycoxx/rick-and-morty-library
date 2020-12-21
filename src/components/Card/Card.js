import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "./Card.css";

export function Card({ name, id, image }) {
  const { path, url } = useRouteMatch();

  return (
    <Link className="card" to={`${url}character/${id}`}>
      <div className="card__content">
        <h2 className="card__title">{name}</h2>
        <img className="card__image" src={image} alt={name} />
      </div>
    </Link>
  );
}
