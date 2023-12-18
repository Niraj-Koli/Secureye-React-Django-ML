import { useState, useRef } from "react";

import styles from "./Prediction.module.css";

import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";

import { Button } from "@mui/material";

import defaultImage from "static/img/default.jpg";

const uploadButtons = {
    fontSize: "1.5rem",
    fontWeight: "600",
    m: "4rem",
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
            <section className={styles.predictionContainer}>
                <Navbar />
            </section>

            <div className={styles.mainButtonsCard}>
                <div className={styles.buttonsCard}>
                    <Button
                        variant="outlined"
                        component="label"
                        sx={{ ...uploadButtons }}>
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
                        sx={{ ...uploadButtons }}>
                        Video
                        <input type="file" hidden />
                    </Button>
                </div>
            </div>

            <div className={styles.mainPredictionCard}>
                <div className={styles.predictionCard}>
                    <div className={styles.imageSection}>
                        <input
                            type="file"
                            ref={imageRef}
                            style={{ display: "none" }}
                            onChange={imageChangeHandler}
                        />
                        <div
                            className={styles.imageStyles}
                            onClick={imageClickHandler}>
                            {image ? (
                                <img
                                    src={URL.createObjectURL(image)}
                                    alt="Prediction"
                                    className={styles.image}
                                />
                            ) : (
                                <img
                                    src={defaultImage}
                                    alt="Default"
                                    className={styles.image}
                                />
                            )}
                        </div>
                    </div>
                </div>
                <div className={styles.predictionCard}>
                    <div className={styles.imageSection}>
                        <input type="file" style={{ display: "none" }} />
                        <div className={styles.imageStyles}>
                            <img
                                src={defaultImage}
                                alt="Default"
                                className={styles.image}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.predictionResultCard}>
                <div className={styles.resultCard}>
                    <Button
                        variant="outlined"
                        component="label"
                        sx={{ ...predictButton }}>
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

export default Prediction;
