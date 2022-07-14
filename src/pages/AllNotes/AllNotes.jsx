import React from "react";
import Notes from "../../components/Notes/Notes";
import { tasksApi } from "../../api/tasksApi";

const AllNotes = (props) => {
    return <Notes getTasks={tasksApi.getAllTasks} />;
};

export default AllNotes;
