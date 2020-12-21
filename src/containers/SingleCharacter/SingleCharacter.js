import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacterInfo } from "../../api/axios";
import { CharacterItem } from "../../components/CharacterItem";
import "./SingleCharacter.css";

export function SingleCharacter() {
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
      <CharacterItem
        image={characterData.image}
        name={characterData.name}
        status={characterData.status}
        location={characterData.location}
        gender={characterData.gender}
      />
    )
  );
}
