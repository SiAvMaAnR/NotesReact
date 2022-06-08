import React, { useState, useEffect, useMemo, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { accountApi, tasksApi } from "../../api";
import Note from "../../components/Note/Note";
import NoteAdding from "../../components/NoteAdding/NoteAdding";
import { useToken } from "../../hooks";
import styles from "./Notes.module.css";

const Notes = (props) => {
    const [token, setToken] = useToken();
    const [pageNumber, setPageNumber] = useState(0);
    const [pageSize, setPageSize] = useState(100);
    const [totalNotes, setTotalNotes] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getTasks();
    }, []);

    function getTasks() {
        tasksApi
            .getAllTasks({
                token: token,
                pageNumber: pageNumber,
                pageSize: pageSize,
            })
            .then((response) => {
                setNotes(response?.data.notes);
                setTotalNotes(response?.data.totalNotes);
                setTotalPages(response?.data.totalPages);
                console.log(response?.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className={styles["page"]}>
            <div>TASKS</div>
            <div>pageNumber: {pageNumber}</div>
            <div>pageSize: {pageSize}</div>
            <div>totalNotes: {totalNotes}</div>
            <div>totalPage: {totalPages}</div>

            <div>
                <NoteAdding getTasks={getTasks} token={token} />
            </div>

            <div className={styles["notes-container"]}>
                {notes.map((note) => (
                    <Note
                        key={note.id}
                        title={note.title}
                        description={note.description}
                        isDone={note.isDone}
                        createDate={new Date(note.createDate)}
                        eventDate={new Date(note.eventDate)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Notes;
