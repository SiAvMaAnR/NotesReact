import React, { useContext, useEffect, useState } from "react";
import { tasksApi } from "../../api";
import { TokenContext } from "../../App";
import CheckBox from "../UI/CheckBox/CheckBox";
import styles from "./Note.module.css";

const Note = (props) => {
    const [token, setToken] = useContext(TokenContext);
    const [isChecked, setIsChecked] = useState(props["isDone"]);
    
    useEffect(() => {
        tasksApi.setIsDoneTask({
            id: props['id'],
            isDone: isChecked,
            token: token
        });
    }, [isChecked]);

    const updateIsDone = (isDone) => {
        setIsChecked(isDone);
    };

    const deleteHandler = async () => {
        const isDelete = await tasksApi
            .deleteTask({
                id: props["id"],
                token: token,
            })
            .then((response) => !!response)
            .catch((error) => false);

        if (isDelete) {
            props.updateTasks();
        }
    };

    return (
        <div className={styles["content"]}>
            <div className={styles["title"]}>{props.title}</div>
            <div className={styles["description"]}>{props.description}</div>

            <div className={styles["done"]}>
                <CheckBox isChecked={isChecked} updateIsDone={updateIsDone} />
            </div>

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

            <div className={styles["delete"]} onClick={() => deleteHandler()}>
                Удалить
            </div>
        </div>
    );
};

export default Note;
