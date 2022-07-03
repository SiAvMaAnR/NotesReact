import React, { useState } from "react";
import Input from "../UI/Input/Input";
import DateTimeInput from "../UI/DateTimeInput/DateTimeInput";
import TextArea from "../UI/TextArea/TextArea";
import Button from "../UI/Button/Button";
import { tasksApi } from "../../api";
import styles from "./NoteAdd.module.css";

const NoteAdd = (props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [eventDate, setEventDate] = useState("");
    const isDone = false;

    function titleChangeHandler(event) {
        setTitle(event.target.value);
    }

    function descriptionChangeHandler(event) {
        setDescription(event.target.value);
    }

    function dateChangeHandler(event) {
        setEventDate(event.target.value);
    }

    function clickHandler(event) {
        tasksApi
            .addTask({
                title: title,
                description: description,
                eventDate: eventDate,
                isDone: isDone,
                token: props["token"],
            })
            .then((response) => {
                if (response) {
                    props.updateTasks();
                }
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    return (
        <div className={styles["container"]}>
            <div className={styles['a']}>
                <Input
                    className={styles["title-input"]}
                    placeholder="Enter title"
                    onChange={(e) => titleChangeHandler(e)}
                    value={title}
                    type="text"
                    maxLength={100}
                />
            </div>

            <div className={styles['a']}>
                <TextArea
                    className={styles["desc-textarea"]}
                    placeholder="Description"
                    rows={4}
                    onChange={(e) => descriptionChangeHandler(e)}
                    value={description}
                    maxLength={1000}
                />
            </div>

            <div className={styles["datetime"]}>
                <div className={styles["icon"]}>
                    <DateTimeInput
                        className={styles["date-input"]}
                        value={eventDate}
                        onChange={(e) => dateChangeHandler(e)}
                    />
                </div>

                <div className={styles["content"]} data-placeholder="ENter date">{eventDate}</div>
            </div>

            <div>
                <Button classStyle="blue" onClick={(e) => clickHandler(e)}>
                    Addition
                </Button>
            </div>
        </div>
    );
};

export default NoteAdd;
