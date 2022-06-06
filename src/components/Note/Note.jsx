import React from "react";
import styles from "./Note.module.css";

const Note = (props) => {
    return (
        <div className={styles["container"]}>
            <div className={styles["content"]}>
                <div className={styles["title"]}>{props.title}</div>
                <div className={styles["description"]}>{props.description}</div>
                <div className={styles["isDone"]}>{props.isDone.toString()}</div>
                <div className={styles["time"]}>
                    {props.date.toLocaleTimeString()}
                </div>

                <div className={styles["date"]}>
                    {props.date.toLocaleDateString()}
                </div>
            </div>
        </div>
    );
};

export default Note;
