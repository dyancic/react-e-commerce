import React from "react";
import style from "./Nav.module.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
    return (
        <nav className={style.Navbar}>
            <h2 className={style.Navbar_Title}>Beano's Vino</h2>
            <input
                type="text"
                placeholder="Search"
                className={style.Navbar_Search}
            />
            <div className={style.Navbar_Links}>
                <NavLink to="/" className={style.Navbar_Link}>
                    Home
                </NavLink>
                <NavLink to="/cart" className={style.Navbar_Link}>
                    Cart
                </NavLink>
            </div>
        </nav>
    );
};

export default Nav;
