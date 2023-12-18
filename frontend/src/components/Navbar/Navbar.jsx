import { useState } from "react";

import styles from "./Navbar.module.css";

import { Button } from "@mui/material";

import { NavLink, Navigate } from "react-router-dom";

import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";

import { useDispatch, useSelector } from "react-redux";

import { logout } from "features/authSlice";

const logoStyles = {
    fontSize: 35,
    mr: "0.5rem",
    mb: "-1rem",
};

const buttonStyles = {
    fontSize: "1.7rem",
    fontWeight: "600",
    borderRadius: "0.5rem",
    padding: "0.4rem 1.7rem",
    ":hover": {
        borderColor: "warning.main",
        bgcolor: "warning.main",
        color: "white.main",
        transition: "all 0.3s ease-in",
    },
};

function Navbar() {
    const dispatch = useDispatch();

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const [redirect, setRedirect] = useState(false);

    const logoutUser = () => {
        dispatch(logout());
        setRedirect(true);
    };

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.navContent}>
                    <NavLink to="/" className={styles.brand}>
                        <VisibilityRoundedIcon sx={{ ...logoStyles }} />
                        <span>Secureye</span>
                    </NavLink>
                </div>

                <div className={styles.navList}>
                    <NavLink to="/" className={styles.navItem}>
                        Home
                    </NavLink>
                    <NavLink to="/demo" className={styles.navItem}>
                        Demo
                    </NavLink>
                    <NavLink to="/prediction" className={styles.navItem}>
                        Prediction
                    </NavLink>
                    <NavLink to="/webcam" className={styles.navItem}>
                        Webcam
                    </NavLink>
                </div>

                <div className={styles.buttons}>
                    {!isAuthenticated ? (
                        <>
                            <NavLink to="/login">
                                <Button
                                    variant="contained"
                                    color="black"
                                    sx={{
                                        color: "white.main",
                                        ...buttonStyles,
                                    }}>
                                    Login
                                </Button>
                            </NavLink>
                            <NavLink to="/register">
                                <Button
                                    variant="contained"
                                    color="black"
                                    sx={{
                                        color: "white.main",
                                        ...buttonStyles,
                                    }}>
                                    Signup
                                </Button>
                            </NavLink>
                        </>
                    ) : (
                        <NavLink to="/">
                            <Button
                                variant="contained"
                                color="black"
                                sx={{ color: "white.main", ...buttonStyles }}
                                onClick={logoutUser}>
                                Logout
                            </Button>
                        </NavLink>
                    )}
                </div>
            </nav>

            {redirect && <Navigate to="/" />}
        </>
    );
}

export default Navbar;
