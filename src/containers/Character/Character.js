import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CharacterSection from "../../components/CharacterSection/CharacterSection";

import "./Character.css";

export default function Character() {
  const { id } = useParams();
  const userId = id;
  const [characterData, setCharacterData] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${userId}`, {
      method: "GET",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(res);
        }
      })
      .then((res) => {
        setCharacterData(res);
      });
  }, [userId]);

  console.log(characterData);

  return (
    Object.keys(characterData).length > 0 &&
      <CharacterSection
        image={characterData.image}
        name={characterData.name}
        status={characterData.status}
        location={characterData.location}
        gender={characterData.gender}
      />
  );
}
