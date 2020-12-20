import React, { useEffect, useState, useRef } from "react";

import Card from "../../components/Card/Card";

import "./Characters.css";

export default function Characters() {
  const [cardsList, setCardslist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const loader = useRef(null);

  console.log("CardsList", cardsList);
  console.log("currentPage", currentPage);

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setCurrentPage((currentPage) => currentPage + 1);
    }
  };

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`, {
      method: "GET",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(res);
        }
      })
      .then(({ results }) => {
        const newList = cardsList.concat(results);
        setCardslist(newList);
      })
  }, [currentPage]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, []);

  const cards = cardsList.map(({ id, name, image }, i) => (
    <li key={i} className="characters__list-item">
      <Card id={id} name={name} image={image} />
    </li>
  ));

  return (
    <section className="characters">
      <h1 className="characters__title">
        Pick a card to get the character profile
      </h1>
      <ul className="characters__list">{cards}</ul>
      <h2 className="characters__text" ref={loader}>Load More</h2>
    </section>
  );
}
