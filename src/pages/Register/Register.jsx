import React from "react";
import { useNavigate } from "react-router-dom";
import style from "../Register/Register.module.css";

const Register = (props) => {
    const navigate = useNavigate();

    const goToLoginHandler = () => {
        navigate("/Login");
    };

    return (
        <div>
            <div>REGISTER PAGE</div>
            <button onClick={() => goToLoginHandler()}>Go to Login</button>
        </div>
    );
};

export default Register;
