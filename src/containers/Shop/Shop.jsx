import React from "react";
import Card from "../../components/Card/Card";
import style from "./Shop.module.scss";

const Shop = ({ wineList }) => {
    console.log(wineList);
    return (
        <div className={style.Container}>
            {wineList.map((wine) => {
                return <Card key={wine.id} wine={wine} />;
            })}
        </div>
    );
};

export default Shop;
