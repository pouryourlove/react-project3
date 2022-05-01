import React from "react";
import memesData from "../memesData";

export default function Meme() {
  function GetMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    url = memesArray[randomNumber].url;
  }

  return (
    <main>
      <form className="form">
        <input
          type="text"
          placeholder="Shut up"
          className="form--input"
        ></input>
        <input
          type="text "
          placeholder="Take my money"
          className="form--input"
        ></input>
        <button className="form--button" onClick={GetMemeImage}>
          Get a new meme image 🖼
        </button>
      </form>
    </main>
  );
}
