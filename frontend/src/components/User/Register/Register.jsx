import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { signup } from "features/authActions";

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
    marginBottom: 8,
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
            <Container component="main" maxWidth="sm">
                <Box sx={{ ...mainCardStyles }}>
                    <Typography component="h1" variant="h4" gutterBottom>
                        Signup
                    </Typography>

                    <Box component="form" noValidate onSubmit={submitHandler}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Username"
                            name="name"
                            id="name"
                            color="sailorBlue"
                            value={name}
                            onChange={changeHandler}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Email Address"
                            name="email"
                            id="email"
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
                            variant="outlined"
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
                            Register
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

export default Register;
