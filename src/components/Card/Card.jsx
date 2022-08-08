import React from "react";
import style from "./Card.module.scss";
import { NavLink } from "react-router-dom";

const Card = ({ wine }) => {
    return (
        <NavLink to={`product/${wine.id}`} style={{ textDecoration: "none" }}>
            <div className={style.Card}>
                <img src={wine.img} alt="" className={style.Card_Img} />
                <div className={style.Card_Info}>
                    <h3>{wine.name}</h3>
                    <p>
                        {wine.winery}, {wine.year}
                    </p>
                    <p>{wine.variety}</p>
                </div>
                <p className={style.Card_Price}>${wine.price}</p>
            </div>
        </NavLink>
    );
};

export default Card;
