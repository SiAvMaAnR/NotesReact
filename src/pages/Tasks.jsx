import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { accountApi, tasksApi } from "../api/index";

const Tasks = (props) => {
    const navigate = useNavigate();

    async function onClick1() {
        let a = await accountApi.login({
            email: "user@example.com",
            password: "string",
        });
        console.log(a);
    }

    async function onClick2() {
        let b = await accountApi.register({
            email: "user2455823@example.com",
            login: "login12",
            password: "f123456",
            confirmPassword: "f123456",
            firstname: "Ivan",
            surname: "Samarkin",
            age: 34,
        });
        console.log(b);
    }

    return (
        <div>
            <div>
                {props.isAuthorized ? <div>Online</div> : <div>Offline</div>}

                <button onClick={() => onClick1()}>Click1</button>
                <button onClick={() => onClick2()}>Click2</button>
            </div>
        </div>
    );
};

export default Tasks;
