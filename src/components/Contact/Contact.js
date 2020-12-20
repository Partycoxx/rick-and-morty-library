import React from "react";
import "./Contact.css";

export default function Contact({ text, link, image }) {
  const Image = image;
  return (
    <a className="contact" href={link}>
      <Image className="contact__image" />
      <span className="contact__text">{text}</span>
    </a>
  );
}
