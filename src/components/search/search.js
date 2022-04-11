import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Music from "../music";
import Playlist from "../playlist/playlist.js";
import "./search.css";

function Search({token}) {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  // const [token, setToken] = useState("");
  const [selectedTrack, setSelectedTrack] = useState([]);
  const [user, setUser] = useState([]);
  const [titleForm, setTitleForm] = useState("");
  const [descForm, setDescForm] = useState("");

  const fetchData = async () => {
    await axios
      .get(
        `https://api.spotify.com/v1/search?q=${query}&type=track&access_token=${token}`
      )
      .then((response) => {
        setData(response.data.tracks.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchUser = () => {
    axios.get("https://api.spotify.com/v1/me", {
        headers: {
            Authorization: "Bearer " + token
        }
    })
    .then(res => {
        setUser(res.data);
    })
    .catch(err => {
        console.log(err);
    })
  };

  const handlePlaylistInitiate = (e) => {
      e.preventDefault();
      if (titleForm.length < 10) {alert("Title must be at least 10 characters")};
      let play = axios.post(`https://api.spotify.com/v1/users/${user.id}/playlists`, JSON.stringify({
          name: titleForm,
          description: descForm,
          public: false
      }), {
          headers: {
              Authorization: "Bearer " + token
          }
      })
      .then(res => {
          // setPlaylist(res.data);
          return res.data;
      })
      .catch(err => {
          console.log(err);
      })

      return play;
  };

  const addTrackToPlaylist = (playlistID) => {
    axios.post(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, JSON.stringify({
        uris: selectedTrack,
    }),{
        headers: {
            Authorization: "Bearer " + token
        }
    })
    .then(res => {
        return res.data;
    })
    .catch(err => {
        console.log(err);
    })
  };

  const handlePlaylist = async (e) => {
    e.preventDefault();
    const playlistId = await handlePlaylistInitiate(e);
    addTrackToPlaylist(playlistId.id);
    alert("Playlist created");
    clearState();
  }

  const clearState = () => {
      setSelectedTrack([]);
      setTitleForm("");
      setDescForm("");
  };

  const handleInput = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    fetchData(query);
  };

  const addToList = (id) => {
    const selectedSong = selectedTrack;
    selectedSong.push(id);
    setSelectedTrack(selectedSong);
  };

  const removeFromList = (id) => {
      const selectedSong = selectedTrack;
      for (let i = 0; i < selectedTrack.length; i++) {
          if (selectedTrack[i] === id) {
              selectedSong.splice(i, 1);
          }
      }
      setSelectedTrack(selectedSong);
  }

  const getStatus = (id) => {
      let status = false;
      for (let i = 0; i < selectedTrack.length; i++) {
          if (selectedTrack[i] === id) {
              status = true;
          }
      }
      return status;
  }

  const handleTitleChange = (e) => {
    const { value } = e.target;
    setTitleForm(value);
  }

  const handleDescChange = (e) => {
      const { value } = e.target;
      setDescForm(value);
  }

  useEffect(() => {
      if (token) {
          fetchUser();
      }
  }, [token]);


  return (
    <>
      <div className="searching">
        <input
          placeholder="Find your favourite songs..."
          type="search"
          className="search-input"
          onChange={(e) => handleInput(e)}
        ></input>
        <button type="button" className="search-button" onClick={fetchData}>
          Search
        </button>
      </div>
      <Playlist handleTitleChange={handleTitleChange} handleDescChange={handleDescChange} handlePlaylist={handlePlaylist}></Playlist>
      <div className="grid">
        {data.map((e) => {
          const status = getStatus(e.uri);
          return (
            <Music
              key={e.id}
              album={e.album.images[1].url}
              name={e.name}
              artist={e.artists[0].name}
              url={e.external_urls.spotify}
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

export default Search;
