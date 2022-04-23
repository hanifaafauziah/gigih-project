import "./music.css";
import React from "react";
import Button from "../button/custom-btn";
import SButton from "../button/select-btn";

export default function Music(props) {

    function getDuration(duration) {
        const minutes = Number((duration / 60000).toFixed(0));
        let seconds = Number(((duration % 60000) / 1000).toFixed(0));
        if (seconds < 10) seconds = `0${seconds}`;
        return `${minutes}:${seconds}`;
    }
  
    return (
    <div className="container">
      <div className="songImg">
        <img src={props.album} className="album-image" alt="album_cover" />
      </div>
      <div className="songDetail">
        <p className="songName">{props.name}</p>
        <p className="songArtist">{props.artist}</p>
        <p className="songDuration">{getDuration(props.duration)}</p>
        <div className="btn-wrap">
          <a href={props.url}> 
            <Button className="btn-play" text="Play"/>
          </a>

          <SButton statusSelect={props.statusSelect} removeFromList={props.removeFromList} 
                      addToList={props.addToList} id={props.id} />
        </div>
        
      </div>
    </div>
    );
}
