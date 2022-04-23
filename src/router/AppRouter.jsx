import { BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from '../redux/token.ts';
import Login from '../pages/loginPage/loginPage.tsx';
import Header from '../components/header/header.tsx';
import CreatePlaylist from '../pages/createPlaylistPage/createPlaylist.tsx';
import Logout from '../components/logout/logout';
import Callback from '../components/callback/callback';
import MyPlaylist from '../pages/myPlaylist/myPlaylist.tsx';

function AppRouter() {
    const token = useSelector(selectToken);
    // const user = useSelector(selectUser);
    // console.log(token);

    return (
      <Router>
        {token ? <Header /> : ''}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/callback" element={<Callback />} />
          <Route path="/myplaylist" element={<MyPlaylist />} />
          {/* <Route path='/profile' element={<UserProfile/>}/> */}
          <Route path="/create-playlist" element={!token ? <Navigate to="/" /> : <CreatePlaylist />} />
          <Route path="/" element={token ? <CreatePlaylist /> : <Navigate to="/login" />} />

          {/* </Route> */}

          {/* </Route> */}
          {/* <Route path="/user-playlist">
              {!token ? <Redirect exact to="/" /> : <Playlist />}
            </Route> */}
          {/* <Route path="*">
              <NotFound />
            </Route> */}
        </Routes>
      </Router>

    );
}

export default AppRouter;
