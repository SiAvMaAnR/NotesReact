import React, { useContext } from "react";
import { tasksApi } from "../../api";
import { TokenContext } from "../../App";
import styles from "./Note.module.css";

const Note = (props) => {
    const [token, setToken] = useContext(TokenContext);

    const deleteHandler = async () => {
        const isDelete = await tasksApi
            .deleteTask({
                id: props["id"],
                token: token,
            })
            .then((response) => !!response)
            .catch((error) => false);

        console.log(isDelete);
    };

    return (
        <div className={styles["container"]}>
            <div className={styles["content"]}>
                <div className={styles["title"]}>{props.title}</div>
                <div className={styles["description"]}>{props.description}</div>
                <div className={styles["done"]}>{props.isDone.toString()}</div>

                <div className={styles["createTime"]}>
                    {props.createDate.toLocaleTimeString()}
                </div>

                <div className={styles["create-date"]}>
                    {props.createDate.toLocaleDateString()}
                </div>

                <div className={styles["event-time"]}>
                    {props.eventDate.toLocaleTimeString()}
                </div>

                <div className={styles["event-date"]}>
                    {props.eventDate.toLocaleDateString()}
                </div>

                <div
                    onClick={() => deleteHandler()}
                    className={styles["delete"]}
                >
                    Удалить
                </div>
            </div>
        </div>
    );
};

export default Note;
