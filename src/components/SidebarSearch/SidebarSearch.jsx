import React from "react";

const SidebarSearch = (props) => {
    return (
        <div className={props.styles["sb-content-element"]}>
            <div className={props.styles["sb-content-btn"]}>
                <div className={props.styles["icon"]}>{props.children}</div>
                <div className={props.styles["search"]}>
                    <input type="text" placeholder="Search..." />
                </div>
            </div>
        </div>
    );
};

export default SidebarSearch;
