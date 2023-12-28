import { createPortal } from "react-dom";

import styles from "./Modal.module.css";

function BackDrop(props) {
    return (
        <>
            <div className={styles.backdrop} onClick={props.onClose} />
        </>
    );
}

function Overlay(props) {
    return (
        <>
            <div className={styles.modal}>
                <div className={styles.content}>{props.children}</div>
            </div>
        </>
    );
}

function Modal(props) {
    return (
        <>
            {createPortal(
                <BackDrop onClose={props.onClose} />,
                document.getElementById("modal")
            )}
            {createPortal(
                <Overlay>{props.children}</Overlay>,
                document.getElementById("modal")
            )}
        </>
    );
}

export default Modal;
