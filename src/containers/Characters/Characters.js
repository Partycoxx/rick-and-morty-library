import React, { useEffect, useState, useRef } from "react";
import { getCardsByPage } from "../../utils/API/axios";
import CharactersList from "../../components/CharactersList/CharactersList";
import "./Characters.css";

export default function Characters() {
  const [cardsList, setCardslist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const loader = useRef();

  /* Получаем данные по API */

  useEffect(() => {
    getCardsByPage(currentPage)
      .then(({ results }) => {
        const newList = cardsList.concat(results);
        setCardslist(newList);
      })
      .catch((err) => console.log(err));
  }, [currentPage]);

  /* Функция, которая вызывается при пересечении viewpoint и инстанса Intersection Observer */

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setCurrentPage((currentPage) => currentPage + 1);
    }
  };

  /* Инициализация инстанса Intersection Observer */

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "200px 0px 0px 0px",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, []);

  return <CharactersList cardsList={cardsList} loader={loader} />;
}
