import { configureStore } from "@reduxjs/toolkit";

import authReducer from "features/authSlice";
import predictionReducer from "features/predictionSlice";
import cookieReducer from "features/cookieSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        prediction: predictionReducer,
        cookie: cookieReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
});

export default store;
