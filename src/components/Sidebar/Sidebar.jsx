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
                    <div className={styles["sidebar-brand"]}>
                        <div className={styles["sidebar-brand-icon"]}>
                            <i className="bx bxs-edit-alt"></i>
                        </div>
                        <div className={styles["sidebar-brand-title"]}>
                            TodoList
                        </div>
                    </div>
                    <div className={styles["sidebar-btn"]}>
                        <i
                            className="bx bx-menu"
                            onClick={() => setIsActive((x) => !x)}
                        ></i>
                    </div>
                </div>

                <div className={styles["sidebar-content"]}>
                    <div className={styles["sb-content-element"]}>
                        <div className={styles["sb-content-btn"]}>
                            <div className={styles["icon"]}>
                                <i className="bx bx-search-alt"></i>
                            </div>
                            <div className={styles["search"]}>
                                <input type="text" placeholder="Search..."/>
                            </div>
                        </div>
                    </div>
                    <div className={styles["sb-content-element"]}>
                        <Link to="" className={styles["sb-content-link"]}>
                            <div className={styles["icon"]}>
                                <i className="bx bx-task"></i>
                            </div>
                            <div className={styles["title"]}>Tasks</div>
                        </Link>
                    </div>
                    <div className={styles["sb-content-element"]}>
                        <Link to="" className={styles["sb-content-link"]}>
                            <div className={styles["icon"]}>
                                <i className="bx bx-heart"></i>
                            </div>
                            <div className={styles["title"]}>Favorites</div>
                        </Link>
                    </div>
                    <div className={styles["sb-content-element"]}>
                        <Link to="" className={styles["sb-content-link"]}>
                            <div className={styles["icon"]}>
                                <i className="bx bx-bell"></i>
                            </div>
                            <div className={styles["title"]}>Notification</div>
                        </Link>
                    </div>
                </div>

                <div className={styles["sidebar-account"]}>Account</div>
            </div>

            <div className={styles["page-content"]}>{props.children}</div>
        </div>
    );
};

export default Sidebar;
