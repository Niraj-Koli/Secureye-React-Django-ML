import { createSlice } from "@reduxjs/toolkit";

const cookieSlice = createSlice({
    name: "cookie",
    initialState: {
        csrftoken: null,
    },
    reducers: {
        setCsrftoken: (state, action) => {
            state.csrftoken = action.payload;
        },
    },
});

export const { setCsrftoken } = cookieSlice.actions;
export default cookieSlice.reducer;
