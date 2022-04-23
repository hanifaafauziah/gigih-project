import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'token',
    initialState: {
        value: localStorage.getItem('token') ? localStorage.getItem('token') : null,
    },
    reducers: {
        setToken: (state, action) => {
            state.value = action.payload;
            localStorage.setItem('token', action.payload);
        },
        removeToken: () => {
            localStorage.removeItem('token');
        },
    },
});

export const { setToken, removeToken } = slice.actions;
// eslint-disable-next-line
export const selectToken = (state:any) => state.token.value;
export default slice.reducer;
