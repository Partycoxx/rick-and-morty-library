import React from "react";
import ErrorImage from "../../assets/images/error_image.png";
import "./NotFound.css";

export function NotFound() {
  return (
    <section className="not-found">
      <h1 className="not-found__number">404</h1>
      <p className="not-found__text">
        Sorry, even Mr. Meeseeks couldn't find this page for you.
      </p>
      <img className="not-found__image" src={ErrorImage} alt="Mr Meeseeks" />
    </section>
  );
}
