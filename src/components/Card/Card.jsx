import React from "react";
import style from "./Card.module.scss";

const Card = ({ wine }) => {
    return (
        <div className={style.Card}>
            <img src={wine.img} alt="" className={style.Card_Img} />
            <h3>{wine.name}</h3>
            <p>
                {wine.winery} {wine.year}
            </p>
            <p>{wine.variety[0]}</p>
        </div>
    );
};

export default Card;
