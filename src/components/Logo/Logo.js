import React from "react";

import "./Logo.css"

import { ReactComponent as LogoImage} from "../../assets/images/logo.svg";

export default function Logo() {
    return (
        <div className="logo">
        <LogoImage className="logo__image" />
        <span className="logo__text">Rick And Morty Library</span>
        </div>
    )
}