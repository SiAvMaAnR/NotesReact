import React, { useState, useEffect, useMemo, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { accountApi, tasksApi } from "../../api/index";
import Input from "../../components/UI/Input/Input";
import { AuthContext, TokenContext } from "../../App";
import styles from "../Login/Login.module.css";
import Button from "../../components/UI/Button/Button";

const Login = (props) => {
    const [token, setToken] = useContext(TokenContext);
    const [isLogged, login, logout] = useContext(AuthContext);

    const navigate = useNavigate();

    const [email, setEmail] = useState("user@example.com");
    const [password, setPassword] = useState("string");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [commonError, setCommonError] = useState("");
    const [loading, setLoading] = useState(false);

    const loginHandler = async () => {
        if (!emailError && !passwordError) {
            setLoading(true);
            const response = await accountApi.login({
                email: email,
                password: password,
            });

            if (response) {
                login(response.data.token);
            } else {
                setCommonError("email or password incorrect");
                setLoading(false);
            }
        }
    };

    const registerHandler = () => {
        navigate("/register");
    };

    const validateEmail = (email) => {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (!email.length) return "enter email";
        if (!reg.test(email)) return "email is incorrect";
        return "";
    };

    const validatePassword = (password) => {
        if (!password.length) return "enter password";
        if (password.length < 6 || password.length > 30)
            return "password length 5-10 characters";
        return "";
    };

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);

        const error = validateEmail(event.target.value);
        setEmailError(error);
    };

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);

        const error = validatePassword(event.target.value);
        setPasswordError(error);
    };

    return (
        <div className={styles["page"]}>
            <div className={styles["authorize"]}>
                <div className={styles["header"]}>
                    To-Do
                </div>


                <div className={styles["common-error"]}>
                    <div className={styles["common-error-text"]}>
                        {commonError}
                    </div>
                </div>

                <div className={styles["input-container"]}>
                    <div className={styles["input-text"]}>{emailError}</div>
                    <Input
                        className={styles["input"]}
                        placeholder="email"
                        onChange={(e) => emailChangeHandler(e)}
                        value={email}
                        type="text"
                    />
                </div>

                <div className={styles["input-container"]}>
                    <div className={styles["input-text"]}>{passwordError}</div>
                    <Input
                        className={styles["input"]}
                        placeholder="password"
                        onChange={(e) => passwordChangeHandler(e)}
                        value={password}
                        type="password"
                    />
                </div>

                <div className={styles["btn-login-container"]}>
                    <Button
                        className={styles["btn-login"]}
                        onClick={() => loginHandler()}
                    >
                        {loading ? (
                            <i className="bx bx-loader-alt"></i>
                        ) : (
                            "Sign in"
                        )}
                    </Button>
                </div>

                <div className={styles["btn-register-container"]}>
                    <Button
                        className={styles["btn-register"]}
                        onClick={() => registerHandler()}
                    >
                        Create new account
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Login;
