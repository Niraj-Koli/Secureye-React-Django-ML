import styles from "./Home.module.css";

import Navbar from "components/Navbar/Navbar";
import FeaturesContainer from "../FeaturesContainer/FeaturesContainer";
import AboutUs from "../AboutUs/AboutUs";
import Footer from "components/Footer/Footer";

function Home() {
    return (
        <>
            <section className={styles.backgroundImage}>
                <Navbar />
            </section>

            <FeaturesContainer />
            <AboutUs />
            <Footer />
        </>
    );
}

export default Home;
