import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Music from "../music";
import "./search.css";

function Search() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [token, setToken] = useState("");
  const [selectedTrack, setSelectedTrack] = useState([]);

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      setToken(window.localStorage.getItem("token"));
    }
  }, []);

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

  console.log(data);

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
