import React from "react";
import Notes from "../../components/Notes/Notes";
import { tasksApi } from "../../api/tasksApi";

const FavoriteNotes = (props) => {
    return <Notes getTasks={tasksApi.getFavoriteTasks}/>;
};

export default FavoriteNotes;
