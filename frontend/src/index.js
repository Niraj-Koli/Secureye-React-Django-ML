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
        white: {
            main: "#ffffff",
        },
        black: {
            main: "#000000",
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
