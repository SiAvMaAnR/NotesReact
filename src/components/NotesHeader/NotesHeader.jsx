import React, { memo } from "react";
import styles from "./NotesHeader.module.css";

const NotesHeader = () => {
    return (
        <div className={styles["container"]}>
            <div className={styles["brand"]}>To-Do</div>
            <div className={styles["more"]}>
                <i className="bx bx-dots-vertical-rounded"></i>
            </div>
        </div>
    );
};

export default memo(NotesHeader);
