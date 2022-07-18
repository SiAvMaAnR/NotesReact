import React, { memo } from "react";
import "/node_modules/boxicons/css/boxicons.css";
import styles from "../Input/Input.module.css";
import PropTypes from "prop-types";

const Input = (props) => {
    return (
        <div className={styles["container"]}>
            <input {...props} />
        </div>
    );
};

Input.propTypes = {
    props: PropTypes.object,
};

Input.defaultProps = {
    props: {
        placeholder: "None",
    },
};

export default memo(Input);
