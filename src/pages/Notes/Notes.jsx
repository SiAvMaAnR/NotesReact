import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { accountApi, tasksApi } from "../../api";
import Note from "../../components/Note/Note";
import NoteAdd from "../../components/NoteAdd/NoteAdd";
import NotesFunc from "../../components/NotesFunc/NotesFunc";
import { useToken } from "../../hooks";
import styles from "./Notes.module.css";

const TIME_REMOVE_TASK = 1000;

const Notes = (props) => {
    const [token, setToken] = useToken();

    const [page, setPage] = useState({
        number: 0,
        size: 100,
        notes: 0,
        total: 0,
        sort: "desc_date",
    });

    const [notes, setNotes] = useState([]);
    const timeout = useRef(null);

    useEffect(() => {
        updateTasks();
    }, []);

    const updateTasks = () => {
        tasksApi
            .getAllTasks({
                token: token,
                pageNumber: page.number,
                pageSize: page.size,
                sort: page.sort,
            })
            .then((response) => {
                setPage((page) => ({
                    ...page,
                    notes: response?.data?.totalNotes,
                    total: response?.data?.totalPages,
                }));
                setNotes(response?.data?.notes);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const updateTasksTimeout = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }

        timeout.current = setTimeout(() => {
            updateTasks();
        }, TIME_REMOVE_TASK);
    };

    return (
        <div className={styles["page"]}>
            <div className={styles["notes"]}>
                <div className={styles["header"]}>
                    <div>To-Do</div>
                </div>

                <div className={styles["content"]}>
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
                            updateTasksTimeout={updateTasksTimeout}
                        />
                    ))}
                </div>
            </div>

            <div className={styles["note-func"]}>
                <NotesFunc>
                    <NoteAdd updateTasks={updateTasks} token={token} />
                </NotesFunc>
            </div>
        </div>
    );
};

export default Notes;
