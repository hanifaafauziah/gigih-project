import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { selectToken } from '../../redux/token';
import { setUser, selectUser } from '../../redux/user';
import Music from '../../components/music/music';
import PlaylistForm from '../../components/playlistForm/playlistForm.jsx';
import './createPlaylist.css';

const rootUrl = process.env.REACT_APP_ROOT_URL;

function CreatePlaylist() {
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const token = useSelector(selectToken);
    const user = useSelector(selectUser);
    const [query, setQuery] = useState('');
    const [titleForm, setTitleForm] = useState('');
    const [descForm, setDescForm] = useState('');
    const [selectedTrack, setSelectedTrack] = useState([]);
    // eslint-disable-next-line
    let selectedSong = [] as any;

    const fetchData = async () => {
        await axios
            .get(`https://api.spotify.com/v1/search?q=${query}&type=track,artist`, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
            .then((response) => {
                setData(response.data.tracks.items);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const clearState = () => {
        setSelectedTrack([]);
        setTitleForm('');
        setDescForm('');
    };

    const handlePlaylistInitiate = (e: { // eslint-disable-next-line
        preventDefault: any; }) => {
        e.preventDefault();
        if (titleForm.length < 10) { alert('Title must be at least 10 characters'); clearState(); } else {
            const play = axios.post(`https://api.spotify.com/v1/users/${user.id}/playlists`, JSON.stringify({
                name: titleForm,
                description: descForm,
                public: false,
                collaborative: false,
            }), {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((res) => res.data)
                .catch((err) => {
                    console.log(err);
                });
            return play;
        }
    };

    const addTrackToPlaylist = (playlistID: string) => {
        axios.post(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, JSON.stringify({
            uris: selectedTrack,
        }), {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => res.data)
            .catch((err) => {
                console.log(err);
            });
    };

    const handlePlaylist = async (e: { // eslint-disable-next-line
        preventDefault: any; }) => {
        e.preventDefault();
        const playlistId = await handlePlaylistInitiate(e);
        addTrackToPlaylist(playlistId.id);
        alert('Playlist created');
        clearState();
        window.location.href = `${rootUrl}/myplaylist`;
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setQuery(e.target.value);
        fetchData();
    };

    const addToList = (id:string) => {
        selectedSong = selectedTrack;
        selectedSong.push(id);
        setSelectedTrack(selectedSong);
    };

    const removeFromList = (id: {target: { value:  string} }) => {
        selectedSong = selectedTrack;
        for (let i = 0; i < selectedTrack.length; i++) {
            if (selectedTrack[i] === id) {
                selectedSong.splice(i, 1);
            }
        }
        setSelectedTrack(selectedSong);
    };

    const getStatus = (id: {target: { value: string } }) => {
        let status = false;
        for (let i = 0; i < selectedTrack.length; i++) {
            if (selectedTrack[i] === id) {
                status = true;
            }
        }
        return status;
    };

    useEffect(() => {
        async function checkToken() {
            try {
                const url = 'https://api.spotify.com/v1/me';
                await axios
                    .get(url, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
            } catch (err) {
                window.location.href = `${rootUrl}/logout`;
            }
        }

        async function getUserInfo() {
            try {
                await axios
                    .get('https://api.spotify.com/v1/me', {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }) // eslint-disable-next-line
                    .then((res:any) => {
                        dispatch(setUser(res.data));
                    });
            } catch (err) {
                console.error(err);
            }
        }

        checkToken();
        getUserInfo();
    }, [dispatch, token]);

    const handleTitleChange = (e: {target: { value: string } }) => {
        const { value } = e.target;
        setTitleForm(value);
    };

    const handleDescChange = (e: {target: { value: string } }) => {
        const { value } = e.target;
        setDescForm(value);
    };

    return (
        <> 
            <h2 className="title-playlist-page">Create Playlist</h2>
			<form className="searching">
				<input
					placeholder="Find your favourite songs..."
					type="search"
					className="search-input"
					onChange={(e) => handleInput(e)}
				/>
				<button type="button" className="search-button" onClick={fetchData}>
          Search
				</button>
			</form>

			<PlaylistForm handleTitleChange={handleTitleChange} handleDescChange={handleDescChange} handlePlaylist={handlePlaylist} />
			<div className="grid"> 
            {/* eslint-disable-next-line */}
				{data.map((e:any) => {
					const status = getStatus(e.uri);
					return (
						<Music
							key={e.id}
							album={e.album.images[1].url}
							name={e.name}
							artist={e.artists[0].name}
							url={e.external_urls.spotify}
							duration={e.duration_ms}
							id={e.uri}
							statusSelect={status}
							addToList={addToList}
							removeFromList={removeFromList}
						/>
					);
				})}
			</div>
        </>
    );
}

export default CreatePlaylist;
