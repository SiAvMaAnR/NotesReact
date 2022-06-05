import React from "react";
import style from "../Button/Button.module.css";

const Button = (props) => {
    return (
        <div className={style["container"]}>
            <button className={style[props.color]} {...props}>{props.children}</button>
        </div>
    );
};

export default Button;
