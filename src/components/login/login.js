import React from "react";
import "./login.css";
import LButton from "../button/login-btn";

function Login() {
  var client_id = process.env.REACT_APP_SPOTIFY_ID_CLIENT;
  var redirect_uri = "http://localhost:3000/callback";
  var scope = "playlist-modify-private";
  var url = "https://accounts.spotify.com/authorize";
  url += "?client_id=" + encodeURIComponent(client_id);
  url += "&scope=" + encodeURIComponent(scope);
  url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
  url += "&response_type=token";
  url += "&show_dialog=" + encodeURIComponent(true);

  return (
    <>
      <div className="button_container">
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
          alt="logo-spotify"
          className="logo-spotify"
        />
        <a className="login_button" href={url}>
          <LButton />
        </a>
      </div>
    </>
  );
}

export default Login;
