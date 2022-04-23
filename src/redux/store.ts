import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './token';
import userReducer from './user';

export default configureStore({
    reducer: {
        token: tokenReducer,
        user: userReducer,
    },
});
