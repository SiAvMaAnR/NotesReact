import React, { useEffect, useState } from "react";
import styles from "./CheckBox.module.css";
import PropTypes from "prop-types";

const CheckBox = ({ style, isChecked, checkboxHandler }) => {
    return (
        <div onClick={() => checkboxHandler()} className={styles["checkbox"]}>
            <div className={isChecked ? styles["active"] : ""} />
        </div>
    );
};

CheckBox.propTypes = {
    style: PropTypes.object,
    isChecked: PropTypes.bool,
    setIsChecked: PropTypes.func,
};

CheckBox.defaultProps = {
    isChecked: false,
};

export default CheckBox;
