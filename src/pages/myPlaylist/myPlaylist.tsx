import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Playlist from '../../components/playlist/playlist';
import { selectToken } from '../../redux/token';
import './myPlaylist.css';

function MyPlaylist() {
    const token = useSelector(selectToken);
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        async function getPlaylists() {
            try {
                await axios
                    .get('https://api.spotify.com/v1/me/playlists?limit=50', {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    })
                    // eslint-disable-next-line
                    .then((res:any) => {
                        setPlaylists(res.data.items);
                    });
            } catch (err) {
                console.error(err);
            }
        }

        getPlaylists();
    }, [token]);

    return (
        <>
			<h1>My Playlist</h1>
			<div className="playlist-main"> 
            {/* eslint-disable-next-line */}
				{playlists.map((item:any) => {
					let image = 'https://www.istockphoto.com/id/foto/dinding-speaker-suara-musik-gaya-vintage-retro-gm1174207130-326471267';
					if (item.images[0]) image = item.images[0].url;
					return (
						<Playlist
							key={item.id}
							id={item.id}
							image={image}
							name={item.name}
							desc={item.description}
						/>
					);
				})}
			</div>
        </>

    );
}
export default MyPlaylist;
