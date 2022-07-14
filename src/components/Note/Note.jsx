import React, { useContext, useState } from "react";
import { tasksApi } from "../../api";
import { TokenContext } from "../../App";
import CheckBox from "../UI/CheckBox/CheckBox";
import styles from "./Note.module.css";
import moment from "moment";

const Note = (props) => {
    const [token, setToken] = useContext(TokenContext);
    const [isDoned, setIsDoned] = useState(props["isDone"]);
    const [isRemove, setIsRemove] = useState(false);
    const [isOpenDesc, setIsOpenDesc] = useState(false);
    const [isFavorite, setIsFavorite] = useState(props["isFavorite"]);

    const removed = isRemove ? " " + styles["removed-active"] : "";
    const doned = isDoned ? " " + styles["doned-active"] : "";
    const opened = isOpenDesc ? " " + styles["opened-active"] : "";
    const favorite = isFavorite ? " " + styles["favorite-active"] : "";

    const checkboxHandler = () => {
        const checked = !isDoned;

        setIsDoned(checked);

        tasksApi.setIsDonedTask({
            id: props["id"],
            isDone: checked,
            token: token,
        });
    };

    const moreHandler = () => {
        setIsOpenDesc((open) => !open);
    };

    const favoriteHandler = () => {
        const favorite = !isFavorite;

        setIsFavorite(favorite);

        tasksApi.setIsFavoriteTask({
            id: props["id"],
            isFavorite: favorite,
            token: token,
        });
    };

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
        <div>
            <div
                className={
                    styles["container"] + removed + doned + opened + favorite
                }
            >
                <div className={styles["done"]}>
                    <CheckBox
                        isChecked={isDoned}
                        checkboxHandler={checkboxHandler}
                    />
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

                <div className={styles["more"]} onClick={() => moreHandler()}>
                    <i className="bx bx-down-arrow"></i>
                </div>

                <div
                    className={styles["favorite"]}
                    onClick={() => favoriteHandler()}
                >
                    <i className="bx bx-heart"></i>
                </div>

                <div
                    className={styles["delete"]}
                    onClick={() => deleteHandler()}
                >
                    <i className="bx bx-trash"></i>
                </div>
            </div>
        </div>
    );
};

export default Note;
