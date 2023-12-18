import styles from "./NotFound.module.css";

import { Button } from "@mui/material";

const homeButtonStyles = {
    mt: 3,
    fontSize: "1.5rem",
    fontWeight: 500,
    bgcolor: "black.main",
    color: "white.main",
    ":hover": {
        color: "white.main",
        bgcolor: "warning.main",
        transition: "all 0.3s ease-in",
    },
};

function NotFound() {
    return (
        <>
            <div className={styles.mainCard}>
                <div className={styles.notFoundCard}>
                    <h1 className={styles.notFoundDescription}>
                        Oops ! The Page you are trying to access doesn't exists.
                    </h1>

                    <Button
                        href="/"
                        sx={{ ...homeButtonStyles }}
                        type="submit"
                        fullWidth
                        variant="contained"
                        size="large">
                        Home
                    </Button>
                </div>
            </div>
        </>
    );
}

export default NotFound;
