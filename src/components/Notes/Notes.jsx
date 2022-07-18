import React from "react";
import Note from "../Note/Note";
import styles from "./Notes.module.css";

const Notes = ({ notes, updateTasksTimeout }) => {
    return (
        <div>
            {notes.map((note) => (
                <Note
                    key={note.id}
                    id={note.id}
                    isDone={note.isDone}
                    isFavorite={note.isFavorite}
                    createDate={new Date(note.createDate)}
                    updateTasksTimeout={updateTasksTimeout}
                    title={note.title}
                    description={note.description}
                    eventDate={note.eventDate}
                />
            ))}
        </div>
    );
};

export default Notes;
