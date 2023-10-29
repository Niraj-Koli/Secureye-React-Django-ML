import { NavLink } from "react-router-dom";

import { Box, Paper, Button } from "@mui/material";

const notFoundCardStyles = {
    display: "flex",
    justifyContent: "center",
};

const paperStyles = {
    marginTop: 12,
    fontSize: 20,
    fontWeight: "600",
    padding: 8,
    width: "50%",
    textAlign: "center",
};

const credentialsButtonsStyles = {
    fontSize: "1.2rem",
    fontWeight: "600",
    marginTop: "3rem",
    borderRadius: "0.5rem",
    padding: "0.4rem 1.3rem",
    ":hover": {
        bgcolor: "warning.main",
        color: "white.main",
        transition: "all 0.3s ease-in",
    },
};

function NotFound() {
    return (
        <>
            <Box sx={{ ...notFoundCardStyles }}>
                <Paper elevation={3} square={false} sx={{ ...paperStyles }}>
                    Oops ! The Page you are trying to access doesn't exists.
                    <NavLink to="/">
                        <Button
                            variant="contained"
                            color="sailorBlue"
                            sx={{
                                color: "white.main",
                                ...credentialsButtonsStyles,
                            }}>
                            Home
                        </Button>
                    </NavLink>
                </Paper>
            </Box>
        </>
    );
}

export default NotFound;
