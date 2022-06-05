import React, { useContext, useState, useEffect, useLayoutEffect } from "react";
import { tokenService } from "../utils/tokenService";

const useAuth = (props) => {
    const [token, setToken] = props;
    const [isLogged, setIsLogged] = useState(!!token);

    useEffect(() => {
        let exp = tokenService.getExpirationDate(token);
        let isExpired = tokenService.isExpired(exp);

        if (isExpired) {
            logout();
        }

        setIsLogged(!!token);
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
