import "./styles.css";
import React from "react";
import Button from "/src/components/button";

export default function Music(props) {
  return (
    <div className="container">
      <div>
        <img src={props.album} className="album-image" alt="album_cover" />
      </div>
      <div className="songDetail">
        <p>
          <b>Song Title: </b>
        </p>
        <p className="songName">{props.name}</p>

        <p>
          <b>Artist: </b>
        </p>
        <p className="songArtist">{props.artist}</p>

        <a href={props.url}>
          <Button />
        </a>
      </div>
    </div>
  );
}
