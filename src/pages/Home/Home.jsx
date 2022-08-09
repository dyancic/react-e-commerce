import React from "react";
import style from "./Home.module.scss";
import Featured from "../../containers/Featured";
import Shop from "../../containers/Shop/Shop";
import { useEffect, useState, useContext } from "react";
import { getFromDatabase, updateItem } from "../../services/server";
import { CartContext } from "../../context/CartContext";

const Home = ({ wineList }) => {
    const { cartContent, setCartContent } = useContext(CartContext);
    const [blogs, setBlogs] = useState([]);

    const getData = async () => {
        const data = await getFromDatabase("blogs");
        setBlogs(data);
    };

    const getCartData = async () => {
        const data = await getFromDatabase("cart");
        setCartContent(data[0]);
    };

    useEffect(() => {
        getData();
        getCartData();
        if (Object.keys(cartContent).length < wineList.length) {
            const cartObj = wineList.reduce((acc, wine) => {
                acc[wine.id] = 0;
                return acc;
            }, {});
            updateItem("cart", "thisIsCartId", cartObj);
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
