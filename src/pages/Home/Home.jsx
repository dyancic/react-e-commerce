import React from "react";
import style from "./Home.module.scss";
import Featured from "../../containers/Featured";
import Shop from "../../containers/Shop/Shop";
import { useEffect, useState, useContext } from "react";
import { getFromDatabase } from "../../services/server";
import { CartContext } from "../../context/CartContext";

const Home = ({ wineList }) => {
    const { cartContent, setCartContent } = useContext(CartContext);
    const [blogs, setBlogs] = useState([]);
    const getData = async () => {
        const data = await getFromDatabase("blogs");
        setBlogs(data);
    };

    useEffect(() => {
        getData();
        if (Object.keys(cartContent).length === 0) {
            const cartObj = wineList.reduce((acc, wine) => {
                acc[wine.name] = 0;
                return acc;
            }, {});
            setCartContent(cartObj);
        }
    }, []);

    return (
        <div className={style.Home}>
            <Featured blogs={blogs} />
            <Shop wineList={wineList} />
        </div>
    );
};

export default Home;
