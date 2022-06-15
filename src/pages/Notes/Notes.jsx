import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { accountApi, tasksApi } from "../../api";
import Note from "../../components/Note/Note";
import NoteAdd from "../../components/NoteAdd/NoteAdd";
import { useToken } from "../../hooks";
import styles from "./Notes.module.css";

const Notes = (props) => {
    const [token, setToken] = useToken();
    const [pageNumber, setPageNumber] = useState(0);
    const [pageSize, setPageSize] = useState(100);
    const [totalNotes, setTotalNotes] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [notes, setNotes] = useState([]);
    // const timeout = useRef(null);


    useEffect(() => {
        updateTasks();
    }, []);

    const updateTasks = () => {
        tasksApi
            .getAllTasks({
                token: token,
                pageNumber: pageNumber,
                pageSize: pageSize,
            })
            .then((response) => {
                setNotes(response?.data?.notes);
                setTotalNotes(response?.data?.totalNotes);
                setTotalPages(response?.data?.totalPages);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // const updateTasksTimer = () => {};

    return (
        <div className={styles["page"]}>
            <div className={styles["notes"]}>
                <div className={styles["header"]}>
                    <div>To-Do</div>
                </div>

                {notes.map((note) => (
                    <Note
                        key={note.id}
                        id={note.id}
                        title={note.title}
                        description={note.description}
                        isDone={note.isDone}
                        createDate={new Date(note.createDate)}
                        eventDate={new Date(note.eventDate)}
                        updateTasks={updateTasks}
                    />
                ))}
                <div className={styles["notes-container"]}></div>
            </div>

            <div className={styles["note-add"]}>
                <NoteAdd updateTasks={updateTasks} token={token} />
            </div>
        </div>
    );
};

export default Notes;
