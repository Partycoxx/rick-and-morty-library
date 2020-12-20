const axios = require("axios").default;

const baseUrl = "https://rickandmortyapi.com/api";

function handleResponse(res) {
  if (res.status === 200) {
    return res.data;
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

export function getCardsByPage(pageNumber) {
  return axios
    .get(`${baseUrl}/character?page=${pageNumber}`)
    .then((res) => handleResponse(res));
}

export function getCharacterInfo(id) {
  return axios
    .get(`${baseUrl}/character/${id}`)
    .then((res) => handleResponse(res));
}
