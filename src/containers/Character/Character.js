import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacterInfo } from "../../utils/API/axios";
import CharacterSection from "../../components/CharacterSection/CharacterSection";
import "./Character.css";

export default function Character() {
  const { id } = useParams();
  const userId = id;
  const [characterData, setCharacterData] = useState({});

  /* Получаем данные о персонаже */

  useEffect(() => {
    getCharacterInfo(userId)
      .then((res) => {
        setCharacterData(res);
      })
      .catch((err) => console.log(err));
  }, [userId]);

  return (
    Object.keys(characterData).length > 0 && (
      <CharacterSection
        image={characterData.image}
        name={characterData.name}
        status={characterData.status}
        location={characterData.location}
        gender={characterData.gender}
      />
    )
  );
}
