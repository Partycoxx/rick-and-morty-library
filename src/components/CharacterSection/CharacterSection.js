import React from "react";
import { Link } from "react-router-dom";
import "./CharacterSection.css";

export default function CharacterSection({
  image,
  name,
  status,
  gender,
  location,
}) {
  return (
    <section className="character">
      <h1 className="character__title">{name}</h1>
      <div className="character__container">
        <img className="character__image" src={image} alt={name} />
        <div className="character__info-container">
          <h2 className="character__info-title">Status</h2>
          <div className="character__status-container">
            <span
              className={
                "character__status " +
                `character__status_type_${status.toLowerCase()}`
              }
            ></span>
            <p className="character__info-text">{status}</p>
          </div>
          <h2 className="character__info-title">Gender</h2>
          <p className="character__info-text">{gender}</p>
          <h2 className="character__info-title">Location</h2>
          <p className="character__info-text">{location.name}</p>
        </div>
      </div>
      <Link className="character__button" to="/rick-and-morty-library">
        Back
      </Link>
    </section>
  );
}
