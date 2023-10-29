import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App";

import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

const THEME = createTheme({
    typography: {
        fontFamily: "Montserrat",
    },
    palette: {
        sailorBlue: {
            main: "#00203f",
        },
        white: {
            main: "#ffffff",
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <ThemeProvider theme={THEME}>
            <App />
        </ThemeProvider>
    </>
);
