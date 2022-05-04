import React from "react";
import memesData from "../memesData";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, SetAllMemeImages] = React.useState(memesData);

  // const [memeImage, setMemeImage] = React.useState(
  //   "http://i.imgflip.com/1bij.jpg"
  // );

  function GetMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <main>
      <div className="form">
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
      </div>
      <img src={meme.randomImage} className="meme--image" />
    </main>
  );
}
