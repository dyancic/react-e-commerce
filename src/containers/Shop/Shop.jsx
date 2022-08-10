import React from "react";
import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import style from "./Shop.module.scss";

const Shop = ({ wineList }) => {
    const [select, setSelect] = useState("name");
    const [search, setSearch] = useState("");

    const handleSelect = (e) => {
        setSelect(e.target.value.toLowerCase());
    };

    const handleSearch = (e) => {
        setSearch(e.target.value.toLowerCase());
    };

    console.log(search);

    return (
        <>
            <h1 className={style.Heading}>Shop our range</h1>
            <div className={style.Search}>
                <input
                    type="text"
                    value={search}
                    onChange={handleSearch}
                    placeholder="Search"
                    className={style.Search_Input}
                />
                <div className={style.Search_Sort}>
                    Sort:
                    <select
                        onChange={handleSelect}
                        className={style.Search_Sort__Select}>
                        <option>Name</option>
                        <option>Price</option>
                        <option>Year</option>
                    </select>
                </div>
            </div>
            <div className={style.Container}>
                {wineList
                    .filter((wine) => {
                        return (
                            wine.name.toLowerCase().includes(search) ||
                            wine.winery.toLowerCase().includes(search) ||
                            wine.variety.toLowerCase().includes(search)
                        );
                    })
                    .sort((a, b) => (a[select] > b[select] ? 1 : -1))
                    .map((wine) => {
                        return <Card key={wine.id} wine={wine} />;
                    })}
            </div>
        </>
    );
};

export default Shop;
