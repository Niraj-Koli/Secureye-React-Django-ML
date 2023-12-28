import { useState } from "react";

import { useNavigate } from "react-router-dom";

import styles from "./Register.module.css";

import Navbar from "components/Navbar/Navbar";

import { useDispatch, useSelector } from "react-redux";

import { signup } from "features/authActions";

import {
    TextField,
    Link,
    Button,
    IconButton,
    InputAdornment,
} from "@mui/material";

import Modal from "components/UI/Modal/Modal";

import { Visibility, VisibilityOff } from "@mui/icons-material";

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

const showPasswordStyles = {
    fontSize: "3rem",
    fontWeight: 600,
    color: "black.main",
};

const isUsername = (value) => /^[a-zA-Z0-9 ]+$/.test(value);
const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const isPassword = (value) => value.length > 7;

function Register() {
    const navigate = useNavigate();

    const [errorModal, setErrorModal] = useState(false);
    const [successModal, setSuccessModal] = useState(false);

    const [userInputsValidity, setUserInputsValidity] = useState({
        username: true,
        email: true,
        password: true,
    });

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        showPassword: false,
    });

    const { name, email, password, showPassword } = formData;

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const dispatch = useDispatch();

    const changeHandler = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const togglePasswordVisibility = () => {
        setFormData({
            ...formData,
            showPassword: !showPassword,
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const isUsernameValid = isUsername(name);
        const isEmailValid = isEmail(email);
        const isPasswordValid = isPassword(password);

        setUserInputsValidity({
            username: isUsernameValid,
            email: isEmailValid,
            password: isPasswordValid,
        });

        if (isUsernameValid && isEmailValid && isPasswordValid) {
            dispatch(signup({ name, email, password }));
            setSuccessModal(true);
        } else {
            setErrorModal(true);
        }
    };

    const closeErrorModalHandler = () => setErrorModal(false);

    const closeSuccessModalHandler = () => {
        setSuccessModal(false);

        navigate("/login");
    };

    if (isAuthenticated) {
        navigate("/");
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
                                    textTransform: "capitalize",
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

            {errorModal && (
                <Modal onClose={closeErrorModalHandler}>
                    <div className={styles.errorModal}>
                        {!userInputsValidity.username && (
                            <div className={styles.errorMessage}>
                                Enter a username!
                            </div>
                        )}

                        {!userInputsValidity.email && (
                            <div className={styles.errorMessage}>
                                Enter a valid email address!
                            </div>
                        )}

                        {!userInputsValidity.password && (
                            <div className={styles.errorMessage}>
                                Password must be 8 characters long.
                            </div>
                        )}
                        <Button
                            sx={{ ...signupButtonStyles }}
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
                            Your account has been successfully created!
                        </div>
                        <div className={styles.successMessage}>
                            A confirmation link has been sent to your Gmail for
                            account activation.
                        </div>
                        <div className={styles.successMessage}>
                            Please check your email and follow the instructions
                            to activate your account.
                        </div>
                        <Button
                            sx={{ ...signupButtonStyles }}
                            type="submit"
                            fullWidth
                            variant="contained"
                            size="large"
                            onClick={closeSuccessModalHandler}>
                            Okay
                        </Button>
                    </div>
                </Modal>
            )}
        </>
    );
}

export default Register;
