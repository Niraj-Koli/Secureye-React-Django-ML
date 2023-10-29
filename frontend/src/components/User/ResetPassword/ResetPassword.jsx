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
    return (
        <>
            <Container component="main" maxWidth="sm">
                <Box sx={{ ...mainCardStyles }}>
                    <Typography component="h1" variant="h4" gutterBottom>
                        Reset Password
                    </Typography>

                    <Box component="form" noValidate>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Email Address"
                            name="email"
                            id="email"
                            type="email"
                            color="sailorBlue"
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
