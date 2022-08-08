import React from "react";
import style from "./Nav.module.scss";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className={style.Navbar}>
            <h2 className={style.Navbar_Title}>Vino</h2>

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
