import React, {memo} from "react";
import styles from "../Button/Button.module.css";
import PropTypes from "prop-types";

const Button = ({ style, className, onClick, children }) => {
    console.log("BUTTON")
    return (
        <div className={styles["container"]}>
            <button
                className={className}
                style={style}
                onClick={onClick}
            >
                {children}
            </button>
        </div>
    );
};

Button.propTypes = {
    style: PropTypes.object,
    onClick: PropTypes.func,
};

Button.defautProps = {
    children: "Click",
};

export default memo(Button);
