import React from 'react';

import Button from '../../components/button/custom-btn';
// import { endpoint } from '../../spotify-endpoint';
import './loginPage.css';
// let styles = require("./loginPage.css");
function Login() {
    // export const publicUrl = process.env.PUBLIC_URL;
    // export const rootUrl = process.env.REACT_APP_ROOT_URL;
    const redirect_uri = process.env.REACT_APP_REDIRECT_URL as string;
    const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID as string;
    const scope = 'playlist-modify-private playlist-modify-public user-read-private playlist-read-private playlist-read-collaborative';
    const spotify_url = 'https://accounts.spotify.com/authorize'
    + '?response_type=token'
    + `&client_id=${encodeURIComponent(client_id)
    }&scope=${encodeURIComponent(scope)
    }&redirect_uri=${encodeURIComponent(redirect_uri)
    }&show_dialog=${encodeURIComponent(true)}`;

    return (
		<div className="button_container">
			<img
				src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
				alt="logo-spotify"
				className="logo-spotify"
			/>
			<a className="login_button" href={spotify_url}>
				<Button className="btn-login" text="Login" />

			</a>
		</div>

    );
}

export default Login;
