import React from 'react';
import Login from "../login/login";
import { useState, useEffect } from "react";
import Search from "../search/search";
import { redirect } from '../../spotify-endpoint';
import LOButton from '../button/logout-btn';

function Home() {
    const [token, setToken] = useState("");
  
    useEffect(() => {
      const hash = window.location.hash;
      window.location.hash = "";
  
      if (!token && hash) {
        const _token = hash.split("&")[0].split("=")[1];
        window.localStorage.setItem("token", _token);
        setToken(_token);
      }
    });
    return !token ? (
      <>
        <div className="App">
          <Login />
        </div>
      </>
    ) : (
      <>
        <div className="App">
            <header className="App-header">
              <h1 className="title">Welcome to Spotify!</h1>
            </header>
            <a className="logout-button" href={redirect}>
              <LOButton />
            </a>
            <Search token={token} />

        </div>
      </>
    );
  }
  
  export default Home;
