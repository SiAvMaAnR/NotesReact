import React, { memo } from "react";
import { Link } from "react-router-dom";

const SidebarLink = (props) => {
    return (
        <div className={props.styles["sb-content-element"]}>
            <Link to={props.to} className={props.styles["sb-content-link"]}>
                <div className={props.styles["icon"]}>{props.children}</div>
                <div className={props.styles["title"]}>{props.title}</div>
            </Link>
        </div>
    );
};

export default memo(SidebarLink);
