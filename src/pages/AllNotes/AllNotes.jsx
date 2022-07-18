import React from "react";
import NotesArea from "../../components/NotesArea/NotesArea";
import { notesApi } from "../../api";

const AllNotes = (props) => {
    return <NotesArea getTasks={notesApi.getAllNotes} />;
};

export default AllNotes;
