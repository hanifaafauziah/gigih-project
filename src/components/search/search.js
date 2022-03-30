import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Music from "../music";
import "./search.css";

function Search() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [token, setToken] = useState("");

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
          return (
            <Music
              key={e.id}
              album={e.album.images[1].url}
              name={e.name}
              artist={e.artists[0].name}
              url={e.external_urls.spotify}
            />
          );
        })}
      </div>
    </>
  );
}

export default Search;
