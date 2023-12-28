import { useRef, useState } from "react";

import styles from "./Image.module.css";

import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { setImage } from "features/predictionSlice";

import { submitImage } from "features/predictionActions";

import { Button, CircularProgress } from "@mui/material";

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

function Prediction() {
    const imageRef = useRef(null);

    const navigate = useNavigate();

    const [loadingSpinner, setLoadingSpinner] = useState(false);
    const [showPredictedObjects, setShowPredictedObjects] = useState(false);

    const dispatch = useDispatch();

    const image = useSelector((state) => state.prediction.image);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const predictedImageUrl = useSelector(
        (state) => state.prediction.predictedImageUrl
    );

    const detectedClasses = useSelector(
        (state) => state.prediction.detectedClasses
    );

    const imageClickHandler = () => {
        imageRef.current.click();
    };

    const imageChangeHandler = (event) => {
        const file = event.target.files[0];
        dispatch(setImage(file));
    };

    const redirectHandler = () => {
        navigate("/login");
    };

    const submitImageHandler = async () => {
        setLoadingSpinner(true);

        try {
            const formData = new FormData();
            formData.append("image", image);

            await dispatch(submitImage(formData));
        } catch (error) {
        } finally {
            setLoadingSpinner(false);
            setShowPredictedObjects(true);
        }
    };

    return (
        <>
            <section className={styles.imageContainer}>
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
                                <div className={styles.image} />
                            )}
                        </div>
                    </div>
                </div>
                <div className={styles.predictionCard}>
                    <div className={styles.imageSection}>
                        <input type="file" style={{ display: "none" }} />
                        <div className={styles.imageStyles}>
                            {predictedImageUrl ? (
                                <img
                                    src={`http://localhost:8000${predictedImageUrl}`}
                                    alt="Predicted"
                                    className={styles.image}
                                />
                            ) : (
                                <div className={styles.image} />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.predictionResultCard}>
                {loadingSpinner ? (
                    <CircularProgress size={80} color="secondary" />
                ) : (
                    <div className={styles.resultCard}>
                        {isAuthenticated ? (
                            <Button
                                variant="outlined"
                                component="label"
                                sx={{ ...predictButton }}
                                onClick={submitImageHandler}
                                disabled={loadingSpinner}>
                                Predict
                            </Button>
                        ) : (
                            <Button
                                variant="outlined"
                                component="label"
                                sx={{ ...predictButton }}
                                onClick={redirectHandler}>
                                Login
                            </Button>
                        )}
                    </div>
                )}
                {showPredictedObjects && (
                    <div className={styles.resultItemsCard}>
                        <h1 className={styles.predictedResultHeading}>
                            <span>Predicted Objects</span>
                        </h1>
                        <ul className={styles.classesList}>
                            {detectedClasses.map((className, index) => (
                                <li
                                    key={index}
                                    className={styles.predictedItems}>
                                    {className}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <Footer />
        </>
    );
}

export default Prediction;
