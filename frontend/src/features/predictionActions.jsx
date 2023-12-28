import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { setCsrftoken } from "features/cookieSlice";
import { setPredictedImageUrl, setDetectedClasses } from "./predictionSlice";

export const submitImage = createAsyncThunk(
    "prediction/submitImage",
    async (formData, { getState, dispatch }) => {
        const csrftoken = getState().cookie.csrftoken;

        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                "X-CSRFToken": csrftoken,
            },
        };

        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API_URL}/api/prediction/`,
                formData,
                config
            );

            if (res.status === 200) {
                const data = res.data;

                const newCsrfToken = res.headers["x-csrftoken"];
                dispatch(setCsrftoken(newCsrfToken));

                dispatch(setPredictedImageUrl(data.image_url));
                dispatch(setDetectedClasses(data.classes));

                return data.image_url;
            } else {
                throw new Error("Failed To Upload Image");
            }
        } catch (error) {
            throw new Error("Error Uploading Image");
        }
    }
);
