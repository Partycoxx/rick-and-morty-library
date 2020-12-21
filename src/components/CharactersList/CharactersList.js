import React from "react";
import { Card } from "../Card";
import "./CharactersList.css";

export function CharactersList({ cardsList, loader }) {
  const cards = cardsList.map(({ id, name, image }, i) => (
    <li key={i} className="characters-list__list-item">
      <Card id={id} name={name} image={image} />
    </li>
  ));

  return (
    <section className="characters-list">
      <h1 className="characters-list__title">
        Pick a card to get the character profile
      </h1>
      <ul className="characters-list__list">{cards}</ul>
      <h2 className="characters-list__text" ref={loader}>
        Load More
      </h2>
    </section>
  );
}
