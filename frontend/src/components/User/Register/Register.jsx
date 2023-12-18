import { useState } from "react";

import { useNavigate } from "react-router-dom";

import styles from "./Register.module.css";

import Navbar from "components/Navbar/Navbar";

import { useDispatch, useSelector } from "react-redux";

import { signup } from "features/authActions";

import { TextField, Link, Button } from "@mui/material";

const signupButtonStyles = {
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

function Register() {
    const navigate = useNavigate();

    const [accountCreated, setAccountCreated] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const { name, email, password } = formData;

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const dispatch = useDispatch();

    const changeHandler = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        dispatch(signup({ name, email, password }));
        setAccountCreated(true);
    };

    if (isAuthenticated) {
        navigate("/");
    }

    if (accountCreated) {
        navigate("/login");
    }

    return (
        <>
            <section className={styles.registerContainer}>
                <Navbar />
            </section>

            <div className={styles.mainCard}>
                <div className={styles.registerCard}>
                    <h1 className={styles.registerHeading}>Signup</h1>

                    <form
                        className={styles.form}
                        noValidate
                        onSubmit={submitHandler}>
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
                            label="Username"
                            name="name"
                            id="name"
                            color="black"
                            value={name}
                            onChange={changeHandler}
                        />

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
                            sx={{ ...signupButtonStyles }}
                            type="submit"
                            fullWidth
                            variant="contained"
                            size="large">
                            Register
                        </Button>

                        <div className={styles.linkContainer}>
                            <Link
                                sx={{ ...anchorsStyles }}
                                href="/login"
                                underline="hover">
                                {"Already have an account? Login"}
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Register;
