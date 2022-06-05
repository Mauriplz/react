import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

const AuthSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        login : (state, action) =>{
            Object.assign(state, action.payload)
        },
        logout : (state) =>{
            return initialState
        },
    }
});

export const { login, logout } = AuthSlice.actions;

export default AuthSlice.reducer;