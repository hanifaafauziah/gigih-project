import React from 'react';

export default function PlaylistForm(props) {
    return (
    <div className="playlist-wrapper">
      <form>
        <ul className="list">
          <li>
            <label htmlFor="title">Playlist Title</label>
            <input className="input" type="text" id="title" name="title" onChange={props.handleTitleChange} required minLength={10} />
          </li>
          <li>
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" type="text" onChange={props.handleDescChange} />
          </li>
        </ul>
        <div className="btn-create-playlist">
          <button className="btn-create" type="submit" onClick={props.handlePlaylist}>
            Create playlist
          </button>
        </div>

      </form>
    </div>
    );
}
