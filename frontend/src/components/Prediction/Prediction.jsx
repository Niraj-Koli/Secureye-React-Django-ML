import { useState, useRef } from "react";

import Footer from "components/UI/Footer/Footer";

import {
    Box,
    Button,
    CardActionArea,
    CardMedia,
    Grid,
    Paper,
} from "@mui/material";

import defaultImage from "./img/default.jpg";

const predictionMainStyles = {
    display: "flex",
    justifyContent: "center",
    marginTop: "3rem",
    marginBottom: "5rem",
};

const predictionCardStyles = {
    width: "80%",
};

const buttonsGridStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
};

const uploadImageButtonStyles = {
    fontSize: "1.2rem",
    fontWeight: "600",
    margin: "0 0.8rem",
    backgroundColor: "sailorBlue.main",
    color: "white.main",
    borderRadius: "0.5rem",
    borderColor: "sailorBlue.main",
    padding: "0.4rem 1.3rem",
    ":hover": {
        borderColor: "warning.main",
        bgcolor: "warning.main",
        color: "white.main",
        transition: "all 0.3s ease-in",
    },
};

const uploadVideoButtonStyles = {
    fontSize: "1.2rem",
    fontWeight: "600",
    backgroundColor: "sailorBlue.main",
    color: "white.main",
    margin: "5rem 0.8rem",
    borderColor: "sailorBlue.main",
    borderRadius: "0.5rem",
    padding: "0.4rem 1.3rem",
    ":hover": {
        borderColor: "warning.main",
        bgcolor: "warning.main",
        color: "white.main",
        transition: "all 0.3s ease-in",
    },
};

const uploadWebCamButtonStyles = {
    fontSize: "1.2rem",
    fontWeight: "600",
    backgroundColor: "sailorBlue.main",
    color: "white.main",
    margin: "0rem 0.8rem",
    borderColor: "sailorBlue.main",
    borderRadius: "0.5rem",
    padding: "0.4rem 1.3rem",
    ":hover": {
        borderColor: "warning.main",
        bgcolor: "warning.main",
        color: "white.main",
        transition: "all 0.3s ease-in",
    },
};

const imageStyles = {
    width: "100%",
    maxWidth: "1200px",
    height: "100%",
    maxHeight: "500px",
};

const imageSectionStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 1,
};

function Prediction() {
    const imageRef = useRef(null);
    const [image, setImage] = useState("");

    const imageClickHandler = () => {
        imageRef.current.click();
    };

    const imageChangeHandler = (event) => {
        const file = event.target.files[0];
        setImage(file);
    };

    return (
        <>
            <Box sx={{ ...predictionMainStyles }}>
                <Paper elevation={3} sx={{ ...predictionCardStyles }}>
                    <Grid container>
                        <Grid item xs={8} sx={{ ...imageSectionStyles }}>
                            <CardActionArea onClick={imageClickHandler}>
                                {image ? (
                                    <CardMedia
                                        sx={{ ...imageStyles }}
                                        component="img"
                                        image={URL.createObjectURL(image)}
                                    />
                                ) : (
                                    <CardMedia
                                        sx={{ ...imageStyles }}
                                        component="img"
                                        image={defaultImage}
                                    />
                                )}
                            </CardActionArea>
                        </Grid>

                        <Grid item xs={4} sx={{ ...buttonsGridStyles }}>
                            <Button
                                variant="outlined"
                                component="label"
                                sx={{ ...uploadImageButtonStyles }}>
                                Image
                                <input
                                    type="file"
                                    ref={imageRef}
                                    onChange={imageChangeHandler}
                                    hidden
                                />
                            </Button>
                            <Button
                                variant="outlined"
                                component="label"
                                sx={{ ...uploadVideoButtonStyles }}>
                                Video
                                <input type="file" hidden />
                            </Button>
                            <Button
                                variant="outlined"
                                component="label"
                                sx={{ ...uploadWebCamButtonStyles }}>
                                WebCam
                                <input type="file" hidden />
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>

            <Footer />
        </>
    );
}

export default Prediction;
