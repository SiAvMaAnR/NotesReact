import React, { useState } from "react";
import Input from "../UI/Input/Input";
import DateTimeInput from "../UI/DateTimeInput/DateTimeInput";
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
            <div>
                <Input
                    style={{ width: "300px" }}
                    placeholder="title"
                    onChange={(e) => titleChangeHandler(e)}
                    value={title}
                    type="text"
                />
            </div>

            <div>
                <Input
                    style={{ width: "300px" }}
                    placeholder="description"
                    onChange={(e) => descriptionChangeHandler(e)}
                    value={description}
                    type="text"
                />
            </div>

            <div>
                <DateTimeInput
                    value={eventDate}
                    onChange={(e) => dateChangeHandler(e)}
                />
            </div>

            <div>
                <Button classStyle="blue" onClick={(e) => clickHandler(e)}>
                    Addition
                </Button>
            </div>

            <div></div>
        </div>
    );
};

export default NoteAdd;