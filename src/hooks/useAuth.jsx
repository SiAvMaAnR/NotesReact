import React, { useContext, useState, useEffect, useLayoutEffect } from "react";
import { tokenService } from "../utils/tokenService";

const useAuth = (props) => {
    const [token, setToken] = props;
    const [isLogged, setIsLogged] = useState(!!token);

    useEffect(() => {
        let exp = tokenService.getExpirationDate(token);

        const timeLeft = tokenService.timeLeft(exp);

        const verifyTokenTimeout = setTimeout(() => {
            logout();
        }, timeLeft);

        setIsLogged(!!token);

        return () => clearTimeout(verifyTokenTimeout);
    }, [token]);

    const login = (newToken) => {
        setToken(newToken);
    };

    const logout = () => {
        setToken(null);
    };

    return [isLogged, login, logout];
};

export default useAuth;
