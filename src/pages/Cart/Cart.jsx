import React, { useContext, useEffect, useState } from "react";
import style from "./Cart.module.scss";
import { CartContext } from "../../context/CartContext";
import { updateItem } from "../../services/server";

const Cart = ({ wineList, getData }) => {
    const { cartContent, setCartContent } = useContext(CartContext);
    const [count, setCount] = useState(cartContent);
    const [message, setMessage] = useState("You have no items in your cart");

    const handleCartContent = (e) => {
        const newCart = cartContent;
        const eventWine = wineList.find((w) => w.name === e.target.value);
        if (
            e.target.innerText === "+" &&
            eventWine.stock > count[eventWine.name]
        ) {
            ++newCart[eventWine.name];
        }
        if (e.target.innerText === "-" && count[eventWine.name] > 0) {
            --newCart[eventWine.name];
        }
        console.log(cartContent);
        setCount((count) => ({
            ...count,
            ...newCart,
        }));
        setCartContent(newCart);
    };

    const handleCheckout = () => {
        wineList.forEach((w) => {
            if (cartContent[w.name]) {
                const stockUpdate = { ...w };
                stockUpdate.stock = stockUpdate.stock - cartContent[w.name];
                updateItem(w.id, stockUpdate);
            }
            getData();
        });

        const resetCart = wineList.reduce((acc, wine) => {
            acc[wine.name] = 0;
            return acc;
        }, {});

        setMessage("Your order has been purchased");
        setCartContent(resetCart);
        setCount(resetCart);
    };

    useEffect(() => {
        console.log(wineList);
    }, []);

    return (
        <div className={style.Cart}>
            <h1>Cart</h1>
            {wineList.map((wine) => {
                if (cartContent[wine.name] > 0) {
                    return (
                        <div className={style.Cart_Container}>
                            <div key={wine.id} className={style.Cart_Item}>
                                <div className={style.Cart_Left}>
                                    <img
                                        src={wine.img}
                                        className={style.Cart_Img}
                                    />
                                    <p className={style.Cart_Name}>
                                        {wine.name}
                                    </p>
                                </div>
                                <div className={style.Cart_Right}>
                                    <button
                                        className={style.Cart_Button}
                                        onClick={handleCartContent}
                                        value={wine.name}>
                                        -
                                    </button>
                                    <p className={style.Cart_Count}>
                                        {count[wine.name]}
                                    </p>
                                    <button
                                        className={style.Cart_Button}
                                        onClick={handleCartContent}
                                        value={wine.name}>
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                }
            })}
            {Object.values(cartContent).every((c) => c === 0) ? (
                <h3>{message}</h3>
            ) : (
                <button className={style.Checkout} onClick={handleCheckout}>
                    Checkout
                </button>
            )}
        </div>
    );
};

export default Cart;
