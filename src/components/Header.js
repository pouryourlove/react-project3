import React from "react";
import Troll from "../images/troll-face.png";

export default function Header() {
  return (
    <div className="header">
      <img src={Troll} className="header--image " />
      <h3 className="header--title">Meme Genereator</h3>
      <h4 className="header--project">React Course - Project 3</h4>
    </div>
  );
}
