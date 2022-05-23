import React, { useState } from "react";
import { Link } from "react-router-dom";
import "/node_modules/boxicons/css/boxicons.css";

const Input = (props) => {
    return (
        <div className="container">
            <input
                placeholder={props.placeholder}
                value={props.value}
                onChange={(e) => props.setValue(e.target.value)}
                type="text"
            />
        </div>
    );
};

export default Input;
