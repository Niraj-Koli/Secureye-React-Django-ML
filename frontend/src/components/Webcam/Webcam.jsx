import { useState, useRef } from "react";

import styles from "./Webcam.module.css";

import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";

import { Button } from "@mui/material";

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

function Webcam() {
    const webcamRef = useRef(null);
    const [webcam, setVideo] = useState("");

    const webcamClickHandler = () => {
        webcamRef.current.click();
    };

    const webcamChangeHandler = (event) => {
        const file = event.target.files[0];
        setVideo(file);
    };

    return (
        <>
            <section className={styles.webcamContainer}>
                <Navbar />
            </section>

            <div className={styles.mainPredictionCard}>
                <div className={styles.predictionCard}>
                    <div className={styles.webcamSection}>
                        <input
                            type="file"
                            ref={webcamRef}
                            style={{ display: "none" }}
                            onChange={webcamChangeHandler}
                        />
                        <div
                            className={styles.webcamStyles}
                            onClick={webcamClickHandler}>
                            {webcam ? (
                                <img
                                    src={URL.createObjectURL(webcam)}
                                    alt="Prediction"
                                    className={styles.webcam}
                                />
                            ) : (
                                <div className={styles.webcam} />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.mainButtonsCard}>
                <div className={styles.buttonsCard}>
                    <Button
                        variant="outlined"
                        component="label"
                        sx={{ ...uploadButtons }}>
                        Webcam
                        <input
                            type="file"
                            ref={webcamRef}
                            onChange={webcamChangeHandler}
                            hidden
                        />
                    </Button>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Webcam;
