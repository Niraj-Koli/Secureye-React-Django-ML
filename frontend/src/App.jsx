import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import AboutPage from "pages/AboutPage";
import PredictionPage from "pages/PredictionPage";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import NotFoundPage from "pages/NotFoundPage";
import ResetPasswordPage from "pages/ResetPasswordPage";
import UpdatePasswordPage from "pages/UpdatePasswordPage";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<AboutPage />} />
                    <Route path="home" element={<Navigate to="/" />} />
                    <Route path="about" element={<Navigate to="/" />} />
                    <Route path="prediction" element={<PredictionPage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="register" element={<RegisterPage />} />
                    <Route
                        path="reset-password"
                        element={<ResetPasswordPage />}
                    />
                    <Route
                        path="update-password"
                        element={<UpdatePasswordPage />}
                    />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
