import React, { useState, useEffect, useRef, memo, useCallback } from "react";
import NoteAdd from "../NoteAdd/NoteAdd";
import NotesFunc from "../NotesFunc/NotesFunc";
import NotesHeader from "../NotesHeader/NotesHeader";
import { useToken } from "../../hooks";
import styles from "./NotesArea.module.css";
import PropTypes from "prop-types";
import NotesList from "../Notes/Notes";

const TIME_REMOVE_TASK = 1000;

const NotesArea = ({ getTasks }) => {
    const [token] = useToken();

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

    const updateTasks = useCallback(() => {
        getTasks({
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
    }, [page, token, getTasks]);

    const updateTasksTimeout = useCallback(() => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }

        timeout.current = setTimeout(() => {
            updateTasks();
        }, TIME_REMOVE_TASK);
    }, [updateTasks]);

    return (
        <div className={styles["page"]}>
            <div className={styles["notes"]}>
                <div className={styles["header"]}>
                    <NotesHeader />
                </div>

                <div className={styles["content"]}>
                    <NotesList
                        notes={notes}
                        updateTasksTimeout={updateTasksTimeout}
                    />
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

NotesArea.propTypes = {
    getTasks: PropTypes.func,
};

NotesArea.defaultProps = {};

export default memo(NotesArea);
