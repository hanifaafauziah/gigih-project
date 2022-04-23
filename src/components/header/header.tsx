import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectToken } from '../../redux/token';
import { setUser, selectUser } from '../../redux/user';
import Button from '../button/custom-btn';
import './header.css';

function Header() {
    const dispatch = useDispatch();
    const token = useSelector(selectToken);
    const user = useSelector(selectUser);

    function UserInfo() {
        return (
			<div className="user-info">
				<header className="App-header">
					<img
						src={user.images[0].url}
						title={user.display_name}
						alt={user.display_name}
						className="image-profile"
					/>
					<h1 className="title">
              Welcome to Spotify,
						<span>
							{' '}
							{user.display_name}
						</span>
              !
					</h1>
				</header>
				<div className="button-wrapper">
					<a className="createplaylist" href="/create-playlist">
						<Button text="Create Playlist" className="btn create" />
					</a>
					<a className="myplaylist" href="/myplaylist">
						<Button text="My Playlist" className="btn playlist" />
					</a>
					<a className="logout-button" href="/logout">
						<Button text="Logout" className="btn logout" />
					</a>
				</div>

			</div>
        );
    }

    useEffect(() => {
        async function getUserInfo() {
            try {
                const url = 'https://api.spotify.com/v1/me';
                await axios
                    .get(url, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    })
                    .then((// eslint-disable-next-line
                    res:any) => {
                        dispatch(setUser(res.data));
                    });
            } catch (err) {
                console.error(err);
            }
        }
        getUserInfo();
        //   console.log(user.display_name);
    }, [token, dispatch]);

    return (
        <>
            {user && <UserInfo />}

        </>

    );
}

export default Header;
