import { useState, useEffect } from "react";

import Navbar from "components/Navbar/Navbar";

import styles from "./Activation.module.css";

import { useNavigate, useParams } from "react-router-dom";

import { useDispatch } from "react-redux";

import { verify } from "features/authActions";

function Activation() {
    const [verified, setVerified] = useState(false);

    const { uid, token } = useParams();

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(verify({ uid, token }));
        setVerified(true);
    }, [dispatch, uid, token]);

    if (verified) {
        navigate("/login");
    }

    return (
        <>
            <section className={styles.activationContainer}>
                <Navbar />
            </section>

            <div className={styles.mainCard}>
                <div className={styles.activationCard}>
                    <h1 className={styles.activationHeading}>
                        Verify Your Account
                    </h1>
                </div>
            </div>
        </>
    );
}

export default Activation;
