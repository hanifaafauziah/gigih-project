import React from "react";
import './playlist.css';

export default function Playlist(props) {
  return (
    <div className="playlist-wrapper">
      <form>
            <h2 className='title-playlist-page'>Create Playlist</h2>
            <ul className='list'>
                <li>
                    <label htmlFor="title">Playlist Title</label>
                    <input className="input" type="text" id="title" name="title" onChange={props.handleTitleChange} required minLength={10}/>
                </li>
                <li>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" name="description" type="text" onChange={props.handleDescChange}/>
                </li>
            </ul>
            <div className='btn-create-playlist'>
              <button className="btn-create" type="submit" onClick={props.handlePlaylist}>
                Create playlist
              </button>
            </div>

        </form>
    </div>
  );
}
