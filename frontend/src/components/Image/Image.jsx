import { useState, useRef } from "react";

import styles from "./Image.module.css";

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

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
        const cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === name + "=") {
                cookieValue = decodeURIComponent(
                    cookie.substring(name.length + 1)
                );
                break;
            }
        }
    }
    return cookieValue;
}

function Prediction() {
    const imageRef = useRef(null);
    const [image, setImage] = useState("");
    const [predictedImageUrl, setPredictedImageUrl] = useState(null);

    const imageClickHandler = () => {
        imageRef.current.click();
    };

    const imageChangeHandler = (event) => {
        const file = event.target.files[0];
        setImage(file);
    };

    async function submitImage() {
        const formData = new FormData();
        formData.append("image", image);

        const csrftoken = getCookie("csrftoken");

        try {
            const response = await fetch(
                "http://127.0.0.1:8000/api/prediction/",
                {
                    method: "POST",
                    headers: {
                        "X-CSRFToken": csrftoken,
                    },
                    body: formData,
                }
            );

            if (response.ok) {
                const data = await response.json();
                console.log("Response data:", data);
                setPredictedImageUrl(data.image_url);
                // Log the URL of the predicted image
                console.log("Predicted image URL:", data.image_url);
            } else {
                console.error("Failed to upload image");
            }
        } catch (error) {
            console.error("Error uploading image", error);
        }
    }

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
                            {predictedImageUrl ? (
                                <img
                                    src={`http://localhost:8000${predictedImageUrl}`}
                                    alt="Predicted"
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
            </div>

            <div className={styles.predictionResultCard}>
                <div className={styles.resultCard}>
                    <Button
                        variant="outlined"
                        component="label"
                        sx={{ ...predictButton }}
                        onClick={submitImage}>
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
