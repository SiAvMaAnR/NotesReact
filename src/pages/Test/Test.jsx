import React, { useState, useEffect, useMemo, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { accountApi, tasksApi } from "../../api/index";
import useToken from "../../hooks/useToken";
import { TokenContext, AuthContext, UserContext } from "../../App";

const Test = (props) => {
    const [token, setToken] = useContext(TokenContext);
    const [isLogged, login, logout] = useContext(AuthContext);
    const [user] = useContext(UserContext);

    const navigate = useNavigate();

    async function onClick1() {
        let login = await accountApi.login({
            email: "user@example.com",
            password: "string",
        });
        console.log(login);
    }

    async function onClick2() {
        let register = await accountApi.register({
            email: "user2455823@example.com",
            login: "login12",
            password: "f123456",
            confirmPassword: "f123456",
            firstname: "Ivan",
            surname: "Samarkin",
            age: 34,
        });
        console.log(register);
    }

    function onClick3() {
        console.log(token);
    }

    function onClick4() {
        setToken(null);
    }

    async function onClick5() {
        let user = await accountApi.info({
            type: "Bearer",
            token: token,
        });
        console.log(user);
    }

    async function onClick6() {
        console.log(isLogged);
    }

    function onClick7() {
        logout();
    }

    function onClick8() {
        console.log(user);
    }

    return (
        <div>
            <div>
                <button onClick={() => onClick1()}>login</button>
                <button onClick={() => onClick2()}>register</button>
                <button onClick={() => onClick3()}>getToken</button>
                <button onClick={() => onClick4()}>deleteToken</button>
                <button onClick={() => onClick5()}>getUser</button>
                <button onClick={() => onClick6()}>isLogged</button>
                <button onClick={() => onClick7()}>logout</button>
                <button onClick={() => onClick8()}>user</button>
            </div>
        </div>
    );
};

export default Test;
