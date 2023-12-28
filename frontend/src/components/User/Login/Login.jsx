import { useState } from "react";

import styles from "./Login.module.css";

import Modal from "components/UI/Modal/Modal";

import {
    TextField,
    Link,
    Button,
    IconButton,
    InputAdornment,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

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

const showPasswordStyles = {
    fontSize: "3rem",
    fontWeight: 600,
    color: "black.main",
};

const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const isPassword = (value) => value.length > 7;

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        showPassword: false,
    });

    const [errorModal, setErrorModal] = useState(false);
    const [successModal, setSuccessModal] = useState(false);

    const navigate = useNavigate();

    const { email, password, showPassword } = formData;

    const dispatch = useDispatch();

    const changeHandler = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const togglePasswordVisibility = () => {
        setFormData({
            ...formData,
            showPassword: !showPassword,
        });
    };

    const closeErrorModalHandler = () => {
        setErrorModal(false);
    };

    const closeSuccessModalHandler = () => {
        setSuccessModal(false);

        navigate("/");
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const isEmailValid = isEmail(email);
        const isPasswordValid = isPassword(password);

        if (isEmailValid && isPasswordValid) {
            dispatch(login({ email, password }));

            setSuccessModal(true);
        } else {
            setErrorModal(true);
        }
    };

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
                                    textTransform: "none",
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
                                    textTransform: "none",
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
                            type={showPassword ? "text" : "password"}
                            color="black"
                            value={password}
                            onChange={changeHandler}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={togglePasswordVisibility}
                                            edge="end">
                                            {showPassword ? (
                                                <VisibilityOff
                                                    sx={{
                                                        ...showPasswordStyles,
                                                    }}
                                                />
                                            ) : (
                                                <Visibility
                                                    sx={{
                                                        ...showPasswordStyles,
                                                    }}
                                                />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
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

            {errorModal && (
                <Modal onClose={closeErrorModalHandler}>
                    <div className={styles.errorModal}>
                        <div className={styles.errorMessage}>
                            Login failed. Please check your credentials.
                        </div>
                        <Button
                            sx={{ ...loginButtonStyles }}
                            type="submit"
                            fullWidth
                            variant="contained"
                            size="large"
                            onClick={closeErrorModalHandler}>
                            Close
                        </Button>
                    </div>
                </Modal>
            )}

            {successModal && (
                <Modal onClose={closeSuccessModalHandler}>
                    <div className={styles.successModal}>
                        <div className={styles.successMessage}>
                            Login successful. Have fun.
                        </div>
                        <Button
                            sx={{ ...loginButtonStyles }}
                            type="submit"
                            fullWidth
                            variant="contained"
                            size="large"
                            onClick={closeSuccessModalHandler}>
                            Redirect
                        </Button>
                    </div>
                </Modal>
            )}
        </>
    );
}

export default Login;
