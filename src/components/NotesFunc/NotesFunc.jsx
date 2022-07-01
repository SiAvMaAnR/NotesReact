import React from "react";
import styles from "./NotesFunc.module.css";

const NotesFunc = ({ children }) => {
    return (
        <div className={styles["container"]}>
            <div className={styles["header"]}>Functional options</div>
            <div className={styles["functional"]}>{children}</div>
        </div>
    );
};

export default NotesFunc;
