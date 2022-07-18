import React, { memo, useState, useCallback } from "react";
import Input from "../UI/Input/Input";
import DateTimeInput from "../UI/DateTimeInput/DateTimeInput";
import TextArea from "../UI/TextArea/TextArea";
import Button from "../UI/Button/Button";
import { notesApi } from "../../api";
import styles from "./NoteAdd.module.css";
import moment from "moment";

const NoteAdd = ({ token, updateTasks }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [eventDate, setEventDate] = useState("");
    const isFavorite = true;
    const isDone = false;

    const titleChangeHandler = useCallback((event) => {
        console.log('title');
        setTitle(event.target.value);
    }, []);

    const descriptionChangeHandler = useCallback((event) => {
        console.log('desc');
        setDescription(event.target.value);
    }, []);

    const dateChangeHandler = useCallback((event) => {
        console.log('date');
        setEventDate(event.target.value);
    }, []);

    const clickHandler = (event) => {
        notesApi
            .addNote({
                title: title,
                description: description,
                eventDate: eventDate,
                isDone: isDone,
                isFavorite: isFavorite,
                token: token,
            })
            .then((response) => {
                if (response) {
                    updateTasks();
                }
            })
            .catch((error) => {
                console.log(error.message);
            });

        setTitle("");
        setDescription("");
        setEventDate("");
    };

    return (
        <div className={styles["container"]}>
            <div>
                <Input
                    className={styles["title-input"]}
                    placeholder="Enter title"
                    onChange={titleChangeHandler}
                    value={title}
                    type="text"
                    maxLength={100}
                />
            </div>

            <div>
                <TextArea
                    className={styles["desc-textarea"]}
                    placeholder="Description"
                    rows={4}
                    onChange={descriptionChangeHandler}
                    value={description}
                    maxLength={1000}
                />
            </div>

            <div className={styles["datetime"]}>
                <div className={styles["icon"]}>
                    <DateTimeInput
                        min={moment(new Date()).format("YYYY-MM-DDThh:mm")}
                        className={styles["date-input"]}
                        value={eventDate}
                        onChange={dateChangeHandler}
                    />
                </div>

                <div
                    className={styles["content"]}
                    data-placeholder="Select date and time"
                >
                    {eventDate && moment(eventDate).format("DD.MM.YYYY HH:mm")}
                </div>
            </div>

            <div>
                <Button
                    className={styles["button"]}
                    onClick={clickHandler}
                >
                    Add note
                </Button>
            </div>
        </div>
    );
};

export default memo(NoteAdd);
