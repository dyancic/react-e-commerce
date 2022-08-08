import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={style.Footer}>
            <p>Made by Daniel Yancic</p>
            <NavLink to="/database">Database Interface</NavLink>
        </footer>
    );
};

export default Footer;
