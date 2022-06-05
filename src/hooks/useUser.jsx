import React, { useEffect, useState } from "react";
import { accountApi } from "../api";

const useUser = (props) => {
    const [token, isLogged, logout] = props;
    const [user, setUser] = useState({});

    useEffect(() => {
        if (isLogged) {
            accountApi
                .info({
                    token: token,
                })
                .then((response) => {
                    setUser(response.data.user);
                })
                .catch((error) => {
                    logout();
                });
        } else {
            setUser({});
        }
    }, [isLogged]);

    return [user];
};

export default useUser;
