import styles from "./Features.module.css";

function Features(props) {
    return (
        <div className={styles.card}>
            <img src={props.img} alt={props.alt} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
}

export default Features;
