import { useState } from "react";

import styles from "./Login.module.css";

import { TextField, Link, Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { login } from "features/authActions";

import Navbar from "components/Navbar/Navbar";

const loginButtonStyles = {
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
    cursor: "pointer",
    "&:hover": {
        textDecoration: "underline",
    },
};

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const { email, password } = formData;

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const dispatch = useDispatch();

    const changeHandler = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        dispatch(login({ email, password }));
    };

    if (isAuthenticated) {
        navigate("/");
    }

    return (
        <>
            <section className={styles.loginContainer}>
                <Navbar />
            </section>

            <div className={styles.mainCard}>
                <div className={styles.loginCard}>
                    <h1 className={styles.loginHeading}>Login</h1>

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

                        <TextField
                            inputProps={{
                                style: {
                                    fontSize: "1.4rem",
                                    fontWeight: 600,
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
                            label="Password"
                            name="password"
                            id="password"
                            type="password"
                            color="black"
                            value={password}
                            onChange={changeHandler}
                        />

                        <Button
                            sx={{ ...loginButtonStyles }}
                            type="submit"
                            fullWidth
                            variant="contained"
                            size="large">
                            Login
                        </Button>

                        <div className={styles.linkContainer}>
                            <Link
                                sx={{ ...anchorsStyles }}
                                href="/reset-password"
                                underline="hover">
                                Forgot password?
                            </Link>
                            <Link
                                sx={{ ...anchorsStyles }}
                                href="/register"
                                underline="hover">
                                {"Don't have an account? Signup"}
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
