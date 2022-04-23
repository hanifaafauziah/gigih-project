import './playlist.css';
import React from 'react';

type playlistItemType = {
    key: string,
    id: string,
    image: string,
    name: string,
    desc: string,
}

function Playlist({
//   id,
    image,
    name,
} : playlistItemType) {
    return (
		<div className="playlist-card">
			<div>
				<img
					src={image}
					title={name}
					alt="Album"
				/>
			</div>
			<div className="detail">
				<p>
					{name}
				</p>
			</div>
		</div>
    );
}

export default Playlist;
