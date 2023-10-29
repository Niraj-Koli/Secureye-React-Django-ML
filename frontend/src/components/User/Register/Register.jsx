import { useState } from "react";

import {
    Container,
    Box,
    Grid,
    TextField,
    Link,
    Typography,
    Button,
    InputAdornment,
    IconButton,
    FormControl,
    OutlinedInput,
    InputLabel,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";

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

function Register() {
    const [showPassword, setShowPassword] = useState(false);

    const clickShowPasswordHandler = () => setShowPassword((show) => !show);

    const mouseDownPasswordHandler = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Container component="main" maxWidth="sm">
                <Box sx={{ ...mainCardStyles }}>
                    <Typography component="h1" variant="h4" gutterBottom>
                        Signup
                    </Typography>

                    <Box component="form" noValidate>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Username"
                            name="username"
                            id="username"
                            color="sailorBlue"
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Email Address"
                            name="email"
                            id="email"
                            color="sailorBlue"
                        />

                        <FormControl
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            id="password"
                            color="sailorBlue"
                            variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">
                                Password
                            </InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? "text" : "password"}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={clickShowPasswordHandler}
                                            onMouseDown={
                                                mouseDownPasswordHandler
                                            }
                                            edge="end">
                                            {showPassword ? (
                                                <VisibilityOff color="sailorBlue" />
                                            ) : (
                                                <Visibility color="sailorBlue" />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>

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
