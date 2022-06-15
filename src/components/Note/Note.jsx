import React, { useContext, useEffect, useState } from "react";
import { tasksApi } from "../../api";
import { TokenContext } from "../../App";
import CheckBox from "../UI/CheckBox/CheckBox";
import styles from "./Note.module.css";
import moment from "moment";

const Note = (props) => {
    const [token, setToken] = useContext(TokenContext);
    const [isChecked, setIsChecked] = useState(props["isDone"]);

    useEffect(() => {
        tasksApi.setIsDoneTask({
            id: props["id"],
            isDone: isChecked,
            token: token,
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
        <div className={styles["container"]}>
            <div className={styles["done"]}>
                <CheckBox isChecked={isChecked} updateIsDone={updateIsDone} />
            </div>

            <div className={styles["content"]}>
                <div className={styles["title"]}>{props.title}</div>
                <div className={styles["description"]}>{props.description}</div>

                <div className={styles["date-time"]}>
                    <div>
                        {`${moment(props.eventDate).format(
                            "ddd, MMM D, HH:mm"
                        )}`}
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
