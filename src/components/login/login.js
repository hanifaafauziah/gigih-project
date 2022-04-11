import React from "react";
import "./login.css";
import LButton from "../button/login-btn";
import { endpoint } from '../../spotify-endpoint';

function Login() {

  return (
    <>
      <div className="button_container">
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
          alt="logo-spotify"
          className="logo-spotify"
        />
        <a className="login_button" href={endpoint}>
          <LButton />
        </a>
      </div>
    </>
  );
}

export default Login;
