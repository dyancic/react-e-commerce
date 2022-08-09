import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={style.Footer}>
            <p>Daniel Yancic</p>
            <NavLink
                to="/database"
                style={{ textDecoration: "none", color: "black" }}>
                Database Interface
            </NavLink>
        </footer>
    );
};

export default Footer;
