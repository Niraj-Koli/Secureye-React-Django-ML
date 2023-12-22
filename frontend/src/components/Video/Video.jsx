import { useState, useRef } from "react";

import styles from "./Video.module.css";

import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";

import { Button } from "@mui/material";

import defaultImage from "static/img/default.jpg";

const uploadButtons = {
    fontSize: "1.5rem",
    fontWeight: "600",
    m: "3rem",
    width: "40%",
    backgroundColor: "black.main",
    color: "white.main",
    borderRadius: "0.5rem",
    borderColor: "black.main",
    ":hover": {
        borderColor: "warning.main",
        bgcolor: "warning.main",
        color: "white.main",
        transition: "all 0.3s ease-in",
    },
};

const predictButton = {
    fontSize: "1.5rem",
    fontWeight: "600",
    m: "2rem 3rem",
    backgroundColor: "black.main",
    color: "white.main",
    borderRadius: "0.5rem",
    borderColor: "black.main",
    ":hover": {
        borderColor: "warning.main",
        bgcolor: "warning.main",
        color: "white.main",
        transition: "all 0.3s ease-in",
    },
};

function Video() {
    const videoRef = useRef(null);
    const [video, setVideo] = useState("");

    const videoClickHandler = () => {
        videoRef.current.click();
    };

    const videoChangeHandler = (event) => {
        const file = event.target.files[0];
        setVideo(file);
    };

    return (
        <>
            <section className={styles.videoContainer}>
                <Navbar />
            </section>

            <div className={styles.mainButtonsCard}>
                <div className={styles.buttonsCard}>
                    <Button
                        variant="outlined"
                        component="label"
                        sx={{ ...uploadButtons }}>
                        Video
                        <input
                            type="file"
                            ref={videoRef}
                            onChange={videoChangeHandler}
                            hidden
                        />
                    </Button>
                </div>
            </div>

            <div className={styles.mainPredictionCard}>
                <div className={styles.predictionCard}>
                    <div className={styles.videoSection}>
                        <input
                            type="file"
                            ref={videoRef}
                            style={{ display: "none" }}
                            onChange={videoChangeHandler}
                        />
                        <div
                            className={styles.videoStyles}
                            onClick={videoClickHandler}>
                            {video ? (
                                <img
                                    src={URL.createObjectURL(video)}
                                    alt="Prediction"
                                    className={styles.video}
                                />
                            ) : (
                                <img
                                    src={defaultImage}
                                    alt="Default"
                                    className={styles.video}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.predictionResultCard}>
                <div className={styles.resultCard}>
                    <Button
                        variant="outlined"
                        component="label"
                        sx={{ ...predictButton }}
                 >
                        Predict
                    </Button>
                </div>
                <div className={styles.resultItemsCard}>
                    <h1 className={styles.predictedResultHeading}>
                        <span>Predicted Objects</span>
                    </h1>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Video;
