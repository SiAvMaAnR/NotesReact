import React, { useState } from "react";
import { Link } from "react-router-dom";
import "/node_modules/boxicons/css/boxicons.css";
import style from "../Input/Input.module.css";

const Input = (props) => {
    return (
        <div className={style["container"]}>
            <input {...props} />
        </div>
    );
};

export default Input;
