import React, { useState, useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { accountApi, tasksApi } from "../api/index";

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
            email: "user@example.com",
            password: "string",
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
                <div>
                    {/* {localStorage.getItem()} */}
                </div>
                <div className="login">
                    <input
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                    />
                </div>
                <div className="password">
                    <input
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="text"
                    />
                </div>
                <div className="btn-send">
                    <button onClick={(e) => loginAccount(e)}>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
