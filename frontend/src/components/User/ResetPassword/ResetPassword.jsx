import { useState } from "react";

import { useNavigate } from "react-router-dom";

import styles from "./ResetPassword.module.css";

import Navbar from "components/Navbar/Navbar";

import { useDispatch } from "react-redux";

import { resetPassword } from "features/authActions";

import { TextField, Link, Button } from "@mui/material";

const resetButtonStyles = {
    mt: 1.5,
    mb: 1,
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

const anchorsStyles = {
    color: "black.main",
    fontSize: "1.3rem",
    textDecoration: "none",
    mt: 1,
    mx: "auto",
    cursor: "pointer",
    "&:hover": {
        textDecoration: "underline",
    },
};

function ResetPassword() {
    const [requestSent, setRequestSent] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
    });

    const navigate = useNavigate();

    const { email } = formData;

    const dispatch = useDispatch();

    const changeHandler = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        dispatch(resetPassword(email));
        setRequestSent(true);
    };

    if (requestSent) {
        navigate("/");
    }

    return (
        <>
            <section className={styles.resetContainer}>
                <Navbar />
            </section>

            <div className={styles.mainCard}>
                <div className={styles.resetCard}>
                    <h1 className={styles.resetHeading}>Reset Password</h1>

                    <form
                        className={styles.form}
                        noValidate
                        onSubmit={submitHandler}>
                        <TextField
                            inputProps={{
                                style: {
                                    fontSize: "1.4rem",
                                    fontWeight: 600,
                                    textTransform: "lowercase",
                                },
                            }}
                            InputLabelProps={{
                                style: {
                                    fontSize: "1.4rem",
                                    width: "auto",
                                    background: "white",
                                },
                            }}
                            margin="normal"
                            required
                            fullWidth
                            label="Email Address"
                            name="email"
                            id="email"
                            type="email"
                            color="black"
                            value={email}
                            onChange={changeHandler}
                        />

                        <Button
                            sx={{ ...resetButtonStyles }}
                            type="submit"
                            fullWidth
                            variant="contained"
                            size="large">
                            Reset Link
                        </Button>

                        <div className={styles.linkContainer}>
                            <Link
                                sx={{ ...anchorsStyles }}
                                href="/login"
                                underline="hover">
                                {"Remembered Password? Login"}
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ResetPassword;
