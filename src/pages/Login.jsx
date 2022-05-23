import React, { useState, useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { accountApi, tasksApi } from "../api/index";
import Input from "../components/UI/Input/Input";


const Login = (props) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [accessToken, setAccessToken] = useState({
        token: "",
        type: "",
    });

    const loginAccount = async (event) => {
        event.preventDefault();

        const response = await accountApi.login({
            email: email,
            password: password,
        });

        setAccessToken({
            token: response.data.token,
            type: response.data.type,
        });

        localStorage.setItem(
            "token",
            `${accessToken.type} ${accessToken.token}`
        );
    };

    return (
        <div className="page">
            <div className="authorize-container">
                {localStorage.getItem('token')}
                <Input placeholder="login" value={email} setValue={setEmail}/>
                <Input placeholder="password" value={password} setValue={setPassword}/>
                
                <div className="btn-send">
                    <button onClick={(e) => loginAccount(e)}>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
