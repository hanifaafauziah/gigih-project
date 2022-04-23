import React from 'react';

import Button from '../../components/button/custom-btn';
import './loginPage.css';

function Login() {
    const redirect_uri = process.env.REACT_APP_REDIRECT_URL as string;
    const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID as string;
    const scope = 'playlist-modify-private user-read-private playlist-read-private playlist-read-collaborative';
    const spotify_url = 'https://accounts.spotify.com/authorize'
    + '?response_type=token'
    + `&client_id=${encodeURIComponent(client_id)
    }&redirect_uri=${encodeURIComponent(redirect_uri)
    }&scope=${encodeURIComponent(scope)
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
