import { useState } from "react";

import styles from "./UpdatePassword.module.css";

import { useNavigate, useParams } from "react-router-dom";

import Navbar from "components/Navbar/Navbar";

import { useDispatch } from "react-redux";

import { resetPasswordConfirm } from "features/authActions";

import { TextField, Button, IconButton, InputAdornment } from "@mui/material";

import Modal from "components/UI/Modal/Modal";

import { Visibility, VisibilityOff } from "@mui/icons-material";

const updateButtonStyles = {
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

const showPasswordStyles = {
    fontSize: "3rem",
    fontWeight: 600,
    color: "black.main",
};

const isPassword = (value) => value.length > 7;
const isPasswordEqual = (password1, password2) => password1 === password2;

function UpdatePassword() {
    const { uid, token } = useParams();

    const navigate = useNavigate();

    const [errorModal, setErrorModal] = useState(false);
    const [successModal, setSuccessModal] = useState(false);

    const [formData, setFormData] = useState({
        newPassword: "",
        confirmPassword: "",
        showNewPassword: false,
        showConfirmPassword: false,
    });

    const {
        newPassword,
        confirmPassword,
        showNewPassword,
        showConfirmPassword,
    } = formData;

    const dispatch = useDispatch();

    const changeHandler = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const toggleNewPasswordVisibility = () => {
        setFormData({
            ...formData,
            showNewPassword: !showNewPassword,
        });
    };

    const toggleConfirmPasswordVisibility = () => {
        setFormData({
            ...formData,
            showConfirmPassword: !showConfirmPassword,
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const isPassword1Valid = isPassword(newPassword);
        const isPassword2Valid = isPassword(confirmPassword);
        const arePasswordsEquals = isPasswordEqual(
            newPassword,
            confirmPassword
        );

        if (isPassword1Valid && isPassword2Valid && arePasswordsEquals) {
            dispatch(
                resetPasswordConfirm({
                    uid,
                    token,
                    new_password: newPassword,
                    re_new_password: confirmPassword,
                })
            );
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
            <section className={styles.updateContainer}>
                <Navbar />
            </section>

            <div className={styles.mainCard}>
                <div className={styles.updateCard}>
                    <h1 className={styles.updateHeading}>Change Password</h1>
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
                            label="Password"
                            name="newPassword"
                            id="password"
                            type={showNewPassword ? "text" : "password"}
                            color="black"
                            value={newPassword}
                            onChange={changeHandler}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={
                                                toggleNewPasswordVisibility
                                            }
                                            edge="end">
                                            {showNewPassword ? (
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
                            label="Confirm Password"
                            name="confirmPassword"
                            id="confirmpassword"
                            type={showConfirmPassword ? "text" : "password"}
                            color="black"
                            value={confirmPassword}
                            onChange={changeHandler}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={
                                                toggleConfirmPasswordVisibility
                                            }
                                            edge="end">
                                            {showConfirmPassword ? (
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
                            sx={{ ...updateButtonStyles }}
                            type="submit"
                            fullWidth
                            variant="contained"
                            size="large">
                            Change
                        </Button>
                    </form>
                </div>
            </div>

            {errorModal && (
                <Modal onClose={closeErrorModalHandler}>
                    <div className={styles.errorModal}>
                        <div className={styles.errorMessage}>
                            Passwords does not match.
                        </div>
                        <Button
                            sx={{ ...updateButtonStyles }}
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
                            Password Changed! You can login.
                        </div>
                        <Button
                            sx={{ ...updateButtonStyles }}
                            type="submit"
                            fullWidth
                            variant="contained"
                            size="large"
                            onClick={closeSuccessModalHandler}>
                            Login
                        </Button>
                    </div>
                </Modal>
            )}
        </>
    );
}

export default UpdatePassword;
