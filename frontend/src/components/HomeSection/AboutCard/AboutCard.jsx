import styles from "./AboutCard.module.css";

function AboutCard(props) {
    return (
        <>
            <div className={styles.aboutus}>
                <div
                    className={styles.card}
                    style={{ background: `${props.background}` }}>
                    <div className={styles.cardContent}>
                        <h5 className={styles.cardTitle}>{props.title}</h5>
                        <p className={styles.cardDescription}>
                            {props.description}
                        </p>
                        <img
                            src={props.image}
                            alt={props.title}
                            className={styles.cardImage}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutCard;
