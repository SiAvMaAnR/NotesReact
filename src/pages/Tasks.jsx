import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { accountApi, tasksApi } from "../api/index";

const Tasks = (props) => {
    const navigate = useNavigate();
    let a = accountApi.login("user@example.com", "string");
    console.log(a);
    return (
        <div>
            <div>
                {props.isAuthorized ? <div>Online</div> : <div>Offline</div>}

                {/* <div>{a}</div> */}
            </div>
        </div>
    );
};

export default Tasks;
