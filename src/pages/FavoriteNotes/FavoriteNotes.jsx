import React from "react";
import NotesArea from "../../components/NotesArea/NotesArea";
import { notesApi } from "../../api/notesApi";

const FavoriteNotes = (props) => {
    return <NotesArea getTasks={notesApi.getFavoriteNotes} />;
};

export default FavoriteNotes;
