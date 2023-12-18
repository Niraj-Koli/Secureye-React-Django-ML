import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "pages/HomePage";
import PredictionPage from "pages/PredictionPage";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import NotFoundPage from "pages/NotFoundPage";
import ResetPasswordPage from "pages/ResetPasswordPage";
import UpdatePasswordPage from "pages/UpdatePasswordPage";
import ActivationPage from "pages/ActivationPage";

import { Provider } from "react-redux";

import store from "store/store";

function App() {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="home" element={<Navigate to="/" />} />
                        <Route path="prediction" element={<PredictionPage />} />
                        <Route path="login" element={<LoginPage />} />
                        <Route path="register" element={<RegisterPage />} />
                        <Route
                            path="reset-password"
                            element={<ResetPasswordPage />}
                        />
                        <Route
                            path="password/reset/confirm/:uid/:token"
                            element={<UpdatePasswordPage />}
                        />
                        <Route
                            path="activate/:uid/:token"
                            element={<ActivationPage />}
                        />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </BrowserRouter>
            </Provider>
        </>
    );
}

export default App;
