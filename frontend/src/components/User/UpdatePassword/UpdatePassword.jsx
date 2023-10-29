import { useState } from "react";

import {
    Container,
    Box,
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
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showNewConfirmPassword, setShowNewConfirmPassword] = useState(false);

    const clickShowNewPasswordHandler = () => {
        setShowNewPassword((show) => !show);
    };

    const clickShowNewConfirmPasswordHandler = () => {
        setShowNewConfirmPassword((show) => !show);
    };

    const mouseDownNewPasswordHandler = (event) => {
        event.preventDefault();
    };

    const mouseDownNewConfirmPasswordHandler = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Container component="main" maxWidth="sm">
                <Box sx={{ ...mainCardStyles }}>
                    <Typography component="h1" variant="h4" gutterBottom>
                        Update Password
                    </Typography>

                    <Box component="form" noValidate>
                        <FormControl
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            id="password"
                            type="password"
                            color="sailorBlue"
                            variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">
                                New Password
                            </InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showNewPassword ? "text" : "password"}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={
                                                clickShowNewPasswordHandler
                                            }
                                            onMouseDown={
                                                mouseDownNewPasswordHandler
                                            }
                                            edge="end">
                                            {showNewPassword ? (
                                                <VisibilityOff color="sailorBlue" />
                                            ) : (
                                                <Visibility color="sailorBlue" />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="New Password"
                            />
                        </FormControl>

                        <FormControl
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            id="password"
                            type="password"
                            color="sailorBlue"
                            variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">
                                Confirm New Password
                            </InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={
                                    showNewConfirmPassword ? "text" : "password"
                                }
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={
                                                clickShowNewConfirmPasswordHandler
                                            }
                                            onMouseDown={
                                                mouseDownNewConfirmPasswordHandler
                                            }
                                            edge="end">
                                            {showNewConfirmPassword ? (
                                                <VisibilityOff color="sailorBlue" />
                                            ) : (
                                                <Visibility color="sailorBlue" />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Confirm New Password"
                            />
                        </FormControl>

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
