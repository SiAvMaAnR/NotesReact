import React from "react";
import styles from "../Button/Button.module.css";
import PropTypes from "prop-types";

const Button = ({ style, classStyle, onClick, children }) => {
    return (
        <div className={styles["container"]}>
            <button
                style={style}
                className={styles[classStyle]}
                onClick={() => onClick()}
            >
                {children}
            </button>
        </div>
    );
};

Button.propTypes = {
    style: PropTypes.object,
    classStyle: PropTypes.string,
    children: PropTypes.string,
    onClick: PropTypes.func,
};

Button.defautProps = {
    classStyle: "blue",
    children: "Click",
};

export default Button;
