import styles from "./FeaturesContainer.module.css";

import Features from "../Features/Features";

import camo from "../../../static/img/Camo2.png";

function FeaturesContainer() {
    return (
        <>
            <section className={styles.features}>
                <h1 className={styles.featuresHeading}>
                    <span>Secureye Features</span>
                </h1>

                <div className={styles.boxContainer}>
                    <Features
                        title="Secureye"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur turpis id sem tincidunt, non pretium erat euismod. Aenean facilisis id elit sed convallis. Aenean ex turpis, pretium eu odio ac, ultrices pulvinar nulla. Nulla diam libero, commodo eu hendrerit sit amet, pulvinar id quam. Pellentesque sagittis turpis at elit consequat fringilla."
                        img={camo}
                        alt="image"></Features>
                    <Features
                        title="Secureye"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur turpis id sem tincidunt, non pretium erat euismod. Aenean facilisis id elit sed convallis. Aenean ex turpis, pretium eu odio ac, ultrices pulvinar nulla. Nulla diam libero, commodo eu hendrerit sit amet, pulvinar id quam. Pellentesque sagittis turpis at elit consequat fringilla."
                        img={camo}
                        alt="image"></Features>
                    <Features
                        title="Secureye"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur turpis id sem tincidunt, non pretium erat euismod. Aenean facilisis id elit sed convallis. Aenean ex turpis, pretium eu odio ac, ultrices pulvinar nulla. Nulla diam libero, commodo eu hendrerit sit amet, pulvinar id quam. Pellentesque sagittis turpis at elit consequat fringilla."
                        img={camo}
                        alt="image"></Features>
                </div>
            </section>
        </>
    );
}

export default FeaturesContainer;
