import { useDispatch } from 'react-redux';
import { removeToken } from '../../redux/token.ts';

const rootUrl = process.env.REACT_APP_ROOT_URL;

function Logout() {
    const dispatch = useDispatch();
    dispatch(removeToken());
    window.location = rootUrl;
}

export default Logout;
