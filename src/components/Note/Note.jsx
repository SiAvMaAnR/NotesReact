import React, { useContext, useEffect, useState, useCallback } from "react";
import { tasksApi } from "../../api";
import { TokenContext } from "../../App";
import CheckBox from "../UI/CheckBox/CheckBox";
import styles from "./Note.module.css";
import moment from "moment";

const Note = (props) => {
    const [token, setToken] = useContext(TokenContext);
    const [isChecked, setIsChecked] = useState(props["isDone"]);
    const [isRemove, setIsRemove] = useState(false);

    const remove = isRemove ? " " + styles["remove"] : "";

    useEffect(() => {
        tasksApi.setIsDoneTask({
            id: props["id"],
            isDone: isChecked,
            token: token,
        });
    }, [isChecked]);

    const deleteHandler = async () => {
        const remove = await tasksApi
            .deleteTask({
                id: props["id"],
                token: token,
            })
            .catch((error) => false);

        setIsRemove(remove);
        props.updateTasksTimeout();
    };

    return (
        <div className={styles["container"] + remove}>
            <div className={styles["done"]}>
                <CheckBox isChecked={isChecked} setIsChecked={setIsChecked} />
            </div>

            <div className={styles["content"]}>
                <div className={styles["top"]}>
                    <div className={styles["title"]}>{props.title}</div>
                    <div className={styles["date-time"]}>
                        <div>
                            {`${moment(props.eventDate).format(
                                "ddd, MMM D, HH:mm"
                            )}`}
                        </div>
                    </div>
                </div>

                <div className={styles["bottom"]}>
                    <div className={styles["description"]}>
                        {props.description}
                    </div>
                </div>
            </div>

            <div className={styles["delete"]} onClick={() => deleteHandler()}>
                <i className="bx bx-trash"></i>
            </div>
        </div>
    );
};

export default Note;
