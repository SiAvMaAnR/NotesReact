import React from "react";
import styles from "./DateTimeInput.module.css";

const DateTimeInput = (props) => {
    return (
        <div>
            <input {...props} type="datetime-local" />
        </div>
    );
};

export default DateTimeInput;
