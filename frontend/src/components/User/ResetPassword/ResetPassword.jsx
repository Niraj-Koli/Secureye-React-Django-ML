import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import { resetPassword } from "features/authActions";

import {
    Container,
    Box,
    Grid,
    TextField,
    Link,
    Typography,
    Button,
} from "@mui/material";

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

const resetButtonStyles = {
    mt: 2.5,
    mb: 2.5,
    color: "white.main",
    ":hover": {
        bgcolor: "warning.main",
        transition: "all 0.3s ease-in",
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
            <Container component="main" maxWidth="sm">
                <Box sx={{ ...mainCardStyles }}>
                    <Typography component="h1" variant="h4" gutterBottom>
                        Reset Password
                    </Typography>

                    <Box component="form" noValidate onSubmit={submitHandler}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Email Address"
                            name="email"
                            id="email"
                            type="email"
                            color="sailorBlue"
                            value={email}
                            onChange={changeHandler}
                        />

                        <Button
                            color="sailorBlue"
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ ...resetButtonStyles }}
                            size="large">
                            Reset
                        </Button>

                        <Grid container>
                            <Grid item margin="auto">
                                <Link
                                    color="sailorBlue"
                                    href="/login"
                                    variant="body2"
                                    underline="hover">
                                    {"Already have an account? Login"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    );
}

export default ResetPassword;
