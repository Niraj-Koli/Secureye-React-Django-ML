import classes from "./Navbar.module.css";

import { NavLink } from "react-router-dom";

import { Button } from "@mui/material";

import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";

const logoStyles = {
    fontSize: 35,
    marginRight: "0.5rem",
    marginBottom: "-0.5rem",
};

const credentialsButtonsStyles = {
    fontSize: "1.2rem",
    fontWeight: "600",
    margin: "0 0.8rem",
    borderRadius: "0.5rem",
    padding: "0.4rem 1.3rem",
    ":hover": {
        borderColor: "warning.main",
        bgcolor: "warning.main",
        color: "white.main",
        transition: "all 0.3s ease-in",
    },
};

function Navbar() {
    return (
        <>
            <header className={classes.header}>
                <NavLink to="/" className={classes.logo}>
                    <VisibilityRoundedIcon sx={{ ...logoStyles }} />
                    <span>Secureye</span>
                </NavLink>

                <nav className={classes.navbar}>
                    <NavLink to="/" className={classes.links}>
                        About
                    </NavLink>
                    <NavLink to="/prediction" className={classes.links}>
                        Prediction
                    </NavLink>
                </nav>

                <div className={classes.actions}>
                    <NavLink to="/login" className={classes.login}>
                        <Button
                            variant="outlined"
                            color="sailorBlue"
                            sx={{ ...credentialsButtonsStyles }}>
                            Login
                        </Button>
                    </NavLink>
                    <NavLink to="/register" className={classes.signup}>
                        <Button
                            variant="contained"
                            color="sailorBlue"
                            sx={{
                                color: "white.main",
                                ...credentialsButtonsStyles,
                            }}>
                            Signup
                        </Button>
                    </NavLink>

                    {/* <NavLink to="/" className={classes.login}>
                        <Button
                            variant="outlined"
                            color="sailorBlue"
                            sx={{ ...credentialsButtonsStyles }}>
                            Logout
                        </Button>
                    </NavLink> */}
                </div>
            </header>
        </>
    );
}

export default Navbar;
