import React, { useState, useContext } from "react";
import style from "./Nav.module.scss";
import { NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import Badge from "react-bootstrap/Badge";
import { CartContext } from "../../context/CartContext";
import { useEffect } from "react";

const Nav = () => {
    const [cartCount, setCartCount] = useState(0);
    const { cartContent, setCartContent } = useContext(CartContext);

    useEffect(() => {
        const count = Object.values(cartContent).filter((n) => n > 0).length;
        setCartCount(count);
    });

    return (
        <nav className={style.Navbar}>
            <h2 className={style.Navbar_Title}>Vino</h2>

            <div className={style.Navbar_Links}>
                <NavLink to="/" className={style.Navbar_Link}>
                    Home
                </NavLink>
                <NavLink to="/cart" className={style.Navbar_Link}>
                    <BsCart3 className={style.Navbar_Cart} />
                    <Badge className={style.Navbar_Badge} pill>
                        {cartCount === 0 ? null : cartCount}
                    </Badge>
                </NavLink>
            </div>
        </nav>
    );
};

export default Nav;
