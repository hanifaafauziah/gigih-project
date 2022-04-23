import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { selectToken } from '../../redux/token';
import { setUser } from '../../redux/user';
// import { selectUser } from '../../redux/user';

// const rootUrl = process.env.REACT_APP_ROOT_URL;

function Home() {
    const dispatch = useDispatch();
    const token = useSelector(selectToken);
    // const user = useSelector(selectUser);

    const getUserInfo = useCallback(() => {
        try {
            const url = 'https://api.spotify.com/v1/me';
            axios
                .get(url, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((res:any) => {
                    dispatch(setUser(res.data));
                });
        } catch (err) {
            console.error(err);
        }
    }, []);

    useEffect(() => {
        getUserInfo();
    }, [getUserInfo]);

    return (
		<h1 className="title">Welcome to Spotify!</h1>

    // <Router>
    //   <Route path="/create-playlist">

    //       <div className="App">
    //               <header className="App-header">
    //                 <h1 className="title">Welcome to Spotify!</h1>
    //               </header>
    //               <a className="logout-button" href={redirect}>
    //                 <LOButton />
    //               </a>
    //               <Search />
    //           </div>
    //           : <Navigate to="/" />}
    //       </Route>
    //       <Route path="/">
    //         {token ?
    //           <Navigate to="/create-playlist" />
    //           :
    //           <div className="App">
    //             <Login/>
    //           </div>
    //         }
    //       </Route>
    // </Router>
    );
}

export default Home;
