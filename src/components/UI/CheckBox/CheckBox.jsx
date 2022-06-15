import React, { useEffect, useState } from "react";
import styles from "./CheckBox.module.css";
import PropTypes from "prop-types";

const CheckBox = ({ style, isChecked, updateIsDone }) => {
    const changeHandler = (event) => {
        updateIsDone(!isChecked);
    };

    return (
        <div>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => changeHandler(e)}
            />
        </div>
    );
};

CheckBox.propTypes = {
    style: PropTypes.object,
    isChecked: PropTypes.bool,
    updateIsDone: PropTypes.func,
};

CheckBox.defaultProps = {
    isChecked: false,
};

export default CheckBox;
