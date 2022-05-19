import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";
import "/node_modules/boxicons/css/boxicons.css";

const Sidebar = (props) => {
    const [isActive, setIsActive] = useState(false);

    let active = isActive ? " " + styles["active"] : "";

    return (
        <div className={styles["page"]}>
            <div className={styles["sidebar"] + active}>
                <div className={styles["sidebar-header"]}>
                    <div className={styles["sidebar-brand"]}>TodoList</div>
                    <div className={styles["sidebar-btn"]}>
                        <i
                            className="bx bx-menu"
                            onClick={() => setIsActive((x) => !x)}
                        ></i>
                    </div>
                </div>

                <div className={styles["sidebar-content"]}>
                    <ul>
                        <li>1####</li>
                        <li>2####</li>
                        <li>3####</li>
                        <li>4####</li>
                    </ul>
                </div>

                <div className={styles["sidebar-account"]}>
                    Account
                </div>
            </div>

            <div className={styles["page-content"]}>{props.children}</div>
        </div>
    );
};

export default Sidebar;
