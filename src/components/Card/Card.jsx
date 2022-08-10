import React, { useState, useEffect } from "react";
import style from "./Card.module.scss";
import { NavLink } from "react-router-dom";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { updateItem, getFromDatabase } from "../../services/server";

const Card = ({ wine }) => {
    const [favourite, setFavourite] = useState();

    const getData = async () => {
        const wineList = await getFromDatabase("wine");
        const wineRef = wineList.find((w) => w.id === wine.id);
        setFavourite(wineRef.favourited);
    };

    useEffect(() => {
        getData();
    }, []);

    const handleFavourite = () => {
        const updatedData = { ...wine, favourited: !favourite };
        updateItem("wine", wine.id, updatedData);
        setFavourite(!favourite);
    };

    return (
        <div>
            <NavLink
                to={`product/${wine.id}`}
                style={{ textDecoration: "none" }}
                className={style.Card}>
                <img src={wine.img} alt="" className={style.Card_Img} />
                <div className={style.Card_Info}>
                    <h3>{wine.name}</h3>
                    <p>
                        {wine.winery}, {wine.year}
                    </p>
                    <p>{wine.variety}</p>
                </div>
                <p className={style.Card_Price}>${wine.price}</p>
            </NavLink>
            <BsHeart className={style.Heart} />
            <BsHeartFill
                onClick={handleFavourite}
                className={
                    favourite
                        ? `${style.Heart_Fill} ${style.Heart_Fill__active}`
                        : style.Heart_Fill
                }
            />
        </div>
    );
};

export default Card;
