import React, { useEffect, useState } from "react";

const useToken = () => {
    const [token, setToken] = useState(() => {
        return localStorage.getItem("token");
    });

    const setTokenStorage = (token) => {
        if (token) {
            localStorage.setItem("token", token);
            setToken(token);
        } else {
            localStorage.removeItem("token");
            setToken(undefined);
        }
    };

    return [token, setTokenStorage];
};

export default useToken;
