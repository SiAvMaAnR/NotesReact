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
                    <Link to="" className={styles["sb-content-link"]}>
                        <div className={styles["sb-content-element"]}>
                            <div className={styles["icon"]}>
                                <i className="bx bx-envelope-open"></i>
                            </div>
                            <div className={styles["title"]}>###1###</div>
                        </div>
                    </Link>
                    <Link to="" className={styles["sb-content-link"]}>
                        <div className={styles["sb-content-element"]}>
                            <div className={styles["icon"]}>
                                <i className="bx bx-envelope-open"></i>
                            </div>
                            <div className={styles["title"]}>###2###</div>
                        </div>
                    </Link>
                    <Link to="" className={styles["sb-content-link"]}>
                        <div className={styles["sb-content-element"]}>
                            <div className={styles["icon"]}>
                                <i className="bx bx-envelope-open"></i>
                            </div>
                            <div className={styles["title"]}>###3###</div>
                        </div>
                    </Link>
                    <Link to="" className={styles["sb-content-link"]}>
                        <div className={styles["sb-content-element"]}>
                            <div className={styles["icon"]}>
                                <i className="bx bx-envelope-open"></i>
                            </div>
                            <div className={styles["title"]}>###4###</div>
                        </div>
                    </Link>
                </div>

                <div className={styles["sidebar-account"]}>Account</div>
            </div>

            <div className={styles["page-content"]}>{props.children}</div>
        </div>
    );
};

export default Sidebar;
