import { useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { useDispatch } from "react-redux";

import { resetPasswordConfirm } from "features/authActions";

import { Container, Box, Typography, Button, TextField } from "@mui/material";

const mainCardStyles = {
    boxShadow: 3,
    borderRadius: 2,
    px: 4,
    py: 4,
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
};

const updatePasswordButtonStyles = {
    mt: 2.5,
    mb: 2.5,
    color: "white.main",
    ":hover": {
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
            <Container component="main" maxWidth="sm">
                <Box sx={{ ...mainCardStyles }}>
                    <Typography component="h1" variant="h4" gutterBottom>
                        Update Password
                    </Typography>

                    <Box component="form" noValidate onSubmit={submitHandler}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Password"
                            name="password"
                            id="password"
                            type="password"
                            color="sailorBlue"
                            variant="outlined"
                            value={newPassword}
                            onChange={newPasswordChangeHandler}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Confirm Password"
                            name="confirmpassword"
                            id="confirmpassword"
                            type="password"
                            color="sailorBlue"
                            variant="outlined"
                            value={confirmPassword}
                            onChange={confirmPasswordChangeHandler}
                        />

                        <Button
                            color="sailorBlue"
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ ...updatePasswordButtonStyles }}
                            size="large">
                            Update
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>
    );
}

export default UpdatePassword;
