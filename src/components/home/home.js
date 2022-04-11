import React from 'react';
import Login from "../login/login";
import { useState, useEffect } from "react";
import Search from "../search/search";
import { redirect } from '../../spotify-endpoint';
import LOButton from '../button/logout-btn';
import { setUserToken } from '../../store/user';
import {useSelector, useDispatch} from 'react-redux';

function Home() {
  const dispatch = useDispatch();
  const user_token = useSelector(state => state.user.user_token);
  
    useEffect(() => {
      const hash = window.location.hash;
      window.location.hash = "";
  
      if (!user_token && hash) {
        const _token = hash.split("&")[0].split("=")[1];
        window.localStorage.setItem("token", _token);
        dispatch(setUserToken(_token))}
    }, [user_token, dispatch]);

    return !user_token ? (
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
            <Search />

        </div>
      </>
    );
  }
  
  export default Home;
