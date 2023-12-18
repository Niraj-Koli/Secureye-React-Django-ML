import styles from "./AboutUs.module.css";

import AboutCard from "../AboutCard/AboutCard";

import camo from "../../../static/img/Camo2.png";

function AboutUs() {
    return (
        <>
            <section className={styles.aboutus}>
                <h1 className={styles.aboutUsHeading}>
                    <span>About Us</span>
                </h1>

                <div className={styles.cardContainer}>
                    <AboutCard
                        title="Our Vision"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur turpis id sem tincidunt, non pretium erat euismod. Aenean facilisis id elit sed convallis. Aenean ex turpis, pretium eu odio ac, ultrices pulvinar nulla. Nulla diam libero, commodo eu hendrerit sit amet, pulvinar id quam. Pellentesque sagittis turpis at elit consequat fringilla."
                        image={camo}
                        alt="Lambda sigma omega"
                        background="#fff"
                    />
                    <AboutCard
                        title="Our Goal"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur turpis id sem tincidunt, non pretium erat euismod. Aenean facilisis id elit sed convallis. Aenean ex turpis, pretium eu odio ac, ultrices pulvinar nulla. Nulla diam libero, commodo eu hendrerit sit amet, pulvinar id quam. Pellentesque sagittis turpis at elit consequat fringilla."
                        image={camo}
                        alt="Lambda sigma omega"
                        background="#fff"
                    />
                </div>
            </section>
        </>
    );
}

export default AboutUs;
