import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setToken, selectToken } from '../../redux/token';

const rootUrl = process.env.REACT_APP_ROOT_URL;

function Callback() {
    const dispatch = useDispatch();
    const token = useSelector(selectToken);
    useEffect(() => {
        function getHashParams() {
            const hashParams = {};
            const r = /([^&;=]+)=?([^&;]*)/g;
            const q = window.location.hash.substring(1);
            let e;
            while ((e = r.exec(q))) {
                hashParams[e[1]] = decodeURIComponent(e[2]);
            }
            return hashParams;
        }
        if (!token) {
            if (getHashParams().access_token) {
                const params = getHashParams();
                const accessToken = params.access_token;
                dispatch(setToken(accessToken));
            }
        }
        window.location = `${rootUrl}/create-playlist`;
    }, [token, dispatch]);

    return 'Redirecting...';
}

export default Callback;
