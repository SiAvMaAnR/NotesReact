import React from "react";
import styles from "./TextArea.module.css";
import PropTypes from "prop-types";

const TextArea = (props) => {
    return (
        <div className={styles["container"]}>
            <textarea {...props} />
        </div>
    );
};

TextArea.propTypes = {
    props: PropTypes.object,
};

export default TextArea;
