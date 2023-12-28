import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    image: null,
    predictedImageUrl: null,
    detectedClasses: [],
};

const predictionSlice = createSlice({
    name: "prediction",
    initialState,
    reducers: {
        setImage: (state, action) => {
            state.image = action.payload;
        },
        setPredictedImageUrl: (state, action) => {
            state.predictedImageUrl = action.payload;
        },
        setDetectedClasses: (state, action) => {
            state.detectedClasses = action.payload;
        },
    },
});

export const { setImage, setPredictedImageUrl, setDetectedClasses } =
    predictionSlice.actions;
export default predictionSlice.reducer;
