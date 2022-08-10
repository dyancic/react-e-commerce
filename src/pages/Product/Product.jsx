import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getFromDatabase, updateItem } from "../../services/server";
import style from "./Product.module.scss";
import { CartContext } from "../../context/CartContext";

const Product = () => {
    const { cartContent, setCartContent } = useContext(CartContext);
    const { wineId } = useParams();
    const id = wineId;
    const [product, setProduct] = useState([]);

    const getData = async () => {
        const data = await getFromDatabase("wine");
        const wine = data.find((w) => w.id === id);
        setProduct(wine);
    };

    useEffect(() => {
        getData();
    }, []);

    const handleClick = () => {
        const updatedCart = { ...cartContent };
        if (cartContent[product.id] < product.stock) {
            updatedCart[product.id] = updatedCart[product.id] + 1;
            updateItem("cart", "thisIsCartId", updatedCart);
            setCartContent(updatedCart);
        }
    };

    return (
        <div className={style.Product}>
            <img src={product.img} className={style.Product_Img} />
            <div className={style.Product_Info}>
                <div className={style.Product_Desc}>
                    <h2>{product.name}</h2>
                    <p>{product.winery}</p>
                    <p>{product.region}</p>
                    <p>{product.variety}</p>
                    <p>{product.style}</p>
                    <p>{product.desc}</p>
                </div>
                <div className={style.Product_Buy}>
                    <p>${product.price}</p>
                    <button onClick={handleClick}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
