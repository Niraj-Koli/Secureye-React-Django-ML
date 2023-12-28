import { useState } from "react";

import { useNavigate } from "react-router-dom";

import styles from "./ResetPassword.module.css";

import Navbar from "components/Navbar/Navbar";

import { useDispatch } from "react-redux";

import { resetPassword } from "features/authActions";

import { TextField, Link, Button } from "@mui/material";

import Modal from "components/UI/Modal/Modal";

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

const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

function ResetPassword() {
    const [errorModal, setErrorModal] = useState(false);
    const [successModal, setSuccessModal] = useState(false);

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

        const isEmailValid = isEmail(email);

        if (isEmailValid) {
            const res = dispatch(resetPassword(email));

            console.log(res);

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

            {errorModal && (
                <Modal onClose={closeErrorModalHandler}>
                    <div className={styles.errorModal}>
                        <div className={styles.errorMessage}>
                            Enter a valid email address!
                        </div>
                        <Button
                            sx={{ ...resetButtonStyles }}
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
                            An email with instructions to reset your password
                            has been sent. Please check your email.
                        </div>
                        <Button
                            sx={{ ...resetButtonStyles }}
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

export default ResetPassword;
