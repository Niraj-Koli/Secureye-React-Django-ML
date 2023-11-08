import { createSlice } from "@reduxjs/toolkit";

import { loadUser, checkAuthenticated, login } from "./authActions";

const initialState = {
    access: localStorage.getItem("access"),
    refresh: localStorage.getItem("refresh"),
    isAuthenticated: null,
    user: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        authenticatedSuccess: (state) => {
            state.isAuthenticated = true;
        },
        authenticatedFail: (state) => {
            state.isAuthenticated = false;
        },
        loginSuccess: (state, action) => {
            localStorage.setItem("access", action.payload.access);
            localStorage.setItem("refresh", action.payload.refresh);
            state.isAuthenticated = true;
            state.access = action.payload.access;
            state.refresh = action.payload.refresh;
        },
        loginFail: (state) => {
            state.isAuthenticated = false;
        },
        signupSuccess: (state) => {
            state.isAuthenticated = false;
        },
        userLoadedSuccess: (state, action) => {
            state.user = action.payload;
        },
        userLoadedFail: (state) => {
            state.user = null;
        },
        logout: (state) => {
            localStorage.removeItem("access");
            localStorage.removeItem("refresh");
            state.access = null;
            state.refresh = null;
            state.isAuthenticated = false;
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadUser.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.user = action.payload;
            })
            .addCase(loadUser.rejected, (state) => {
                state.isAuthenticated = false;
                state.user = null;
            })
            .addCase(checkAuthenticated.fulfilled, (state, action) => {
                state.isAuthenticated = action.payload;
            })
            .addCase(checkAuthenticated.rejected, (state) => {
                state.isAuthenticated = false;
            })
            .addCase(login.rejected, (state) => {
                state.isAuthenticated = false;
            });
    },
});

export const {
    authenticatedSuccess,
    authenticatedFail,
    loginSuccess,
    loginFail,
    signupSuccess,
    userLoadedSuccess,
    userLoadedFail,
    logout,
} = authSlice.actions;

export default authSlice.reducer;
