import { useState, useEffect } from "react";

import { Container, Box, Typography } from "@mui/material";

import { useNavigate, useParams } from "react-router-dom";

import { useDispatch } from "react-redux";

import { verify } from "features/authActions";

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

function Activation() {
    const [verified, setVerified] = useState(false);

    const { uid, token } = useParams();

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(verify({ uid, token }));
        setVerified(true);
    }, [dispatch, uid, token]);

    if (verified) {
        navigate("/");
    }

    return (
        <>
            <Container component="main" maxWidth="sm">
                <Box sx={{ ...mainCardStyles }}>
                    <Typography component="h1" variant="h4" gutterBottom>
                        Verify Your Account
                    </Typography>
                </Box>
            </Container>
        </>
    );
}

export default Activation;
