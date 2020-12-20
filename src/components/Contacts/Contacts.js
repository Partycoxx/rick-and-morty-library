import React from "react";
import Contact from "../Contact/Contact";
import config from "./config";
import "./Contacts.css";

export default function Contacts() {
  const contactItems = config.map(({ text, image, link }, i) => (
    <li key={i} className="contacts__list-item">
      <Contact text={text} image={image} link={link} />
    </li>
  ));

  return (
    <div className="contacts">
      <span className="contacts__text">Никита Евдокимов, 2020</span>
      <ul className="contacts__list">{contactItems}</ul>
    </div>
  );
}
