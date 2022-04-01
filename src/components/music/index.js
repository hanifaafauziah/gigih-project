import "./styles.css";
import React from "react";
import PButton from "../button/play-btn";
import SButton from "../button/select-btn";

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
          <PButton />
        </a>

        <SButton statusSelect={props.statusSelect} removeFromList={props.removeFromList} 
                    addToList={props.addToList} id={props.id} />
      </div>
    </div>
  );
}
