import { useState } from "react";

import styles from "./UpdatePassword.module.css";

import { useNavigate, useParams } from "react-router-dom";

import Navbar from "components/Navbar/Navbar";

import { useDispatch } from "react-redux";

import { resetPasswordConfirm } from "features/authActions";

import { Button, TextField } from "@mui/material";

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

function UpdatePassword() {
    const { uid, token } = useParams();

    const navigate = useNavigate();

    const [requestSent, setRequestSent] = useState(false);

    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const dispatch = useDispatch();

    const newPasswordChangeHandler = (event) => {
        setNewPassword(event.target.value);
    };

    const confirmPasswordChangeHandler = (event) => {
        setConfirmPassword(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        dispatch(
            resetPasswordConfirm({
                uid,
                token,
                new_password: newPassword,
                re_new_password: confirmPassword,
            })
        );

        setRequestSent(true);
    };

    if (requestSent) {
        navigate("/");
    }

    return (
        <>
            <section className={styles.updateContainer}>
                <Navbar />
            </section>

            <div className={styles.mainCard}>
                <div className={styles.updateCard}>
                    <h1 className={styles.updateHeading}>Update Password</h1>

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
                            label="Password"
                            name="password"
                            id="password"
                            type="password"
                            color="black"
                            value={newPassword}
                            onChange={newPasswordChangeHandler}
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
                            label="Confirm Password"
                            name="confirmpassword"
                            id="confirmpassword"
                            type="password"
                            color="black"
                            value={confirmPassword}
                            onChange={confirmPasswordChangeHandler}
                        />

                        <Button
                            sx={{ ...updateButtonStyles }}
                            type="submit"
                            fullWidth
                            variant="contained"
                            size="large">
                            Update
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default UpdatePassword;
