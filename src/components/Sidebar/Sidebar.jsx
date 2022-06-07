import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";
import "/node_modules/boxicons/css/boxicons.css";
import img from "../../styles/wallhaven-477pv4.jpg";
import SidebarLink from "../SidebarLink/SidebarLink";
import SidebarSearch from "../SidebarSearch/SidebarSearch";
import { AuthContext, UserContext } from "../../App";

const Sidebar = (props) => {
    const [isActive, setIsActive] = useState(false);

    const [isLogged, login, logout] = useContext(AuthContext);
    const [user] = useContext(UserContext);

    let active = isActive ? " " + styles["active"] : "";

    const logoutHandler = () => {
        logout();
    };

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
                    <SidebarSearch styles={styles}>
                        <i className="bx bx-search-alt"></i>
                    </SidebarSearch>

                    <SidebarLink to="/Notes" title="Notes" styles={styles}>
                        <i className="bx bx-task"></i>
                    </SidebarLink>

                    <SidebarLink to="/Home" title="Favorites" styles={styles}>
                        <i className="bx bx-heart"></i>
                    </SidebarLink>

                    <SidebarLink to="" title="Notification" styles={styles}>
                        <i className="bx bx-bell"></i>
                    </SidebarLink>

                    <SidebarLink to="/Test" title="Settings" styles={styles}>
                        <i className="bx bx-cog"></i>
                    </SidebarLink>
                </div>

                <div className={styles["sidebar-account"]}>
                    <div className={styles["image"]}>
                        <img src={img} alt="person" />
                    </div>
                    <div className={styles["info"]}>
                        <div className={styles["name"]}>{props.login}</div>
                        <div className={styles["status"]}>{props.role}</div>
                    </div>
                    <div
                        className={styles["logout"]}
                        onClick={() => logoutHandler()}
                    >
                        <i className="bx bx-log-out-circle"></i>
                    </div>
                </div>
            </div>

            <div className={styles["page-content"]}>{props.children}</div>
        </div>
    );
};

export default Sidebar;
