import React, { useContext, useState, memo, useMemo } from "react";
import { notesApi } from "../../api";
import { TokenContext } from "../../App";
import CheckBox from "../UI/CheckBox/CheckBox";
import styles from "./Note.module.css";
import moment from "moment";

const Note = memo(({ id, isDone, isFavorite, updateTasksTimeout, title, description, eventDate }) => {
    const [token] = useContext(TokenContext);
    const [isDoned, setIsDoned] = useState(isDone);
    const [isRemove, setIsRemove] = useState(false);
    const [isOpenDesc, setIsOpenDesc] = useState(false);
    const [isFavorited, setIsFavorited] = useState(isFavorite);

    const removed = useMemo(
        () => (isRemove ? " " + styles["removed-active"] : ""),
        [isRemove]
    );
    const doned = useMemo(
        () => (isDoned ? " " + styles["doned-active"] : ""),
        [isDoned]
    );
    const opened = useMemo(
        () => (isOpenDesc ? " " + styles["opened-active"] : ""),
        [isOpenDesc]
    );
    const favorite = useMemo(
        () => (isFavorited ? " " + styles["favorite-active"] : ""),
        [isFavorited]
    );

    const checkboxHandler = (isChecked) => {
        setIsDoned(isChecked);

        notesApi.setIsDonedNote({
            id: id,
            isDone: isChecked,
            token: token,
        });
    };

    const moreHandler = (isOpen) => {
        setIsOpenDesc(isOpen);
    };

    const favoriteHandler = (isFavorited) => {
        setIsFavorited(isFavorited);

        notesApi.setIsFavoriteNote({
            id: id,
            isFavorite: isFavorited,
            token: token,
        });
    };

    const deleteHandler = async () => {
        const remove = await notesApi
            .deleteNote({
                id: id,
                token: token,
            })
            .catch((error) => false);

        setIsRemove(remove);
        updateTasksTimeout();
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
                        <div className={styles["title"]}>{title}</div>
                        <div className={styles["date-time"]}>
                            <div>
                                {`${moment(eventDate).format(
                                    "ddd, MMM D, HH:mm"
                                )}`}
                            </div>
                        </div>
                    </div>

                    <div className={styles["bottom"]}>
                        <div className={styles["description"]}>
                            {description}
                        </div>
                    </div>
                </div>

                <div
                    className={styles["more"]}
                    onClick={() => moreHandler(!isOpenDesc)}
                >
                    <i className="bx bx-down-arrow"></i>
                </div>

                <div
                    className={styles["favorite"]}
                    onClick={() => favoriteHandler(!isFavorited)}
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
});

export default memo(Note);
