import { useState } from "react";

import {
    Container,
    Box,
    Grid,
    TextField,
    Link,
    Typography,
    Button,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { login } from "features/authActions";

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

const loginButtonStyles = {
    mt: 2.5,
    mb: 2.5,
    color: "white.main",
    ":hover": {
        bgcolor: "warning.main",
        transition: "all 0.3s ease-in",
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
            <Container component="main" maxWidth="sm">
                <Box sx={{ ...mainCardStyles }}>
                    <Typography component="h1" variant="h4" gutterBottom>
                        Login
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

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Password"
                            name="password"
                            id="password"
                            type="password"
                            color="sailorBlue"
                            value={password}
                            onChange={changeHandler}
                        />

                        <Button
                            color="sailorBlue"
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ ...loginButtonStyles }}
                            size="large">
                            Login
                        </Button>

                        <Grid container>
                            <Grid item xs>
                                <Link
                                    color="sailorBlue"
                                    href="/reset-password"
                                    variant="body2"
                                    underline="hover">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link
                                    color="sailorBlue"
                                    href="/register"
                                    variant="body2"
                                    underline="hover">
                                    {"Don't have an account? Signup"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    );
}

export default Login;
