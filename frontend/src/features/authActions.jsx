import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { loginSuccess } from "./authSlice";

export const loadUser = createAsyncThunk(
    "auth/loadUser",
    async (_, thunkAPI) => {
        if (localStorage.getItem("access")) {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `JWT ${localStorage.getItem("access")}`,
                    Accept: "application/json",
                },
            };

            try {
                const res = await axios.get(
                    `${process.env.REACT_APP_API_URL}/auth/users/me/`,
                    config
                );

                return res.data;
            } catch (error) {
                throw error;
            }
        } else {
            throw new Error("Access Token Not Found");
        }
    }
);

export const checkAuthenticated = createAsyncThunk(
    "auth/checkAuthenticated",
    async (_, thunkAPI) => {
        if (localStorage.getItem("access")) {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            };

            const body = JSON.stringify({
                token: localStorage.getItem("access"),
            });

            try {
                const res = await axios.post(
                    `${process.env.REACT_APP_API_URL}/auth/jwt/verify/`,
                    body,
                    config
                );
                if (res.data.code !== "token_not_valid") {
                    return true;
                } else {
                    return false;
                }
            } catch (err) {
                throw err;
            }
        } else {
            return false;
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async ({ email, password }, thunkAPI) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const body = JSON.stringify({ email, password });

        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API_URL}/auth/jwt/create/`,
                body,
                config
            );
            thunkAPI.dispatch(loginSuccess(res.data));
            thunkAPI.dispatch(loadUser());
        } catch (err) {
            throw err;
        }
    }
);

export const signup = createAsyncThunk(
    "auth/signup",
    async ({ email, name, password }, thunkAPI) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const body = JSON.stringify({
            email,
            name,
            password,
        });

        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API_URL}/auth/users/`,
                body,
                config
            );
            return res.data;
        } catch (err) {
            throw err;
        }
    }
);

export const verify = createAsyncThunk(
    "auth/verify",
    async ({ uid, token }, thunkAPI) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const body = JSON.stringify({ uid, token });

        try {
            await axios.post(
                `${process.env.REACT_APP_API_URL}/auth/users/activation/`,
                body,
                config
            );
            return true;
        } catch (err) {
            throw err;
        }
    }
);

export const resetPassword = createAsyncThunk(
    "auth/resetPassword",
    async (email, thunkAPI) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const body = JSON.stringify({ email });

        try {
            await axios.post(
                `${process.env.REACT_APP_API_URL}/auth/users/reset_password/`,
                body,
                config
            );
            return true;
        } catch (err) {
            throw err;
        }
    }
);

export const resetPasswordConfirm = createAsyncThunk(
    "auth/resetPasswordConfirm",
    async ({ uid, token, new_password, re_new_password }, thunkAPI) => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const body = JSON.stringify({
            uid,
            token,
            new_password,
            re_new_password,
        });

        try {
            await axios.post(
                `${process.env.REACT_APP_API_URL}/auth/users/reset_password_confirm/`,
                body,
                config
            );
            return true;
        } catch (err) {
            throw err;
        }
    }
);
