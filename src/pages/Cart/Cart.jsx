import React, { useContext, useEffect, useState } from "react";
import style from "./Cart.module.scss";
import { CartContext } from "../../context/CartContext";
import { updateItem, getFromDatabase } from "../../services/server";

const Cart = ({ wineList, getData }) => {
    const { cartContent, setCartContent } = useContext(CartContext);
    const [message, setMessage] = useState("You have no items in your cart");

    const getCartData = async () => {
        const data = await getFromDatabase("cart");
        setCartContent(data[0]);
    };

    useEffect(() => {
        getCartData();
    }, []);

    const handleCartContent = (e) => {
        const newCart = cartContent;
        const eventWine = wineList.find((w) => w.id === e.target.value);

        if (
            e.target.innerText === "+" &&
            eventWine.stock > cartContent[eventWine.id]
        )
            ++newCart[eventWine.id];

        if (e.target.innerText === "-" && cartContent[eventWine.id] > 0)
            --newCart[eventWine.id];

        updateItem("cart", "thisIsCartId", newCart);

        setCartContent((cartContent) => ({
            ...cartContent,
            ...newCart,
        }));
    };

    const handleCheckout = () => {
        wineList.forEach((w) => {
            if (cartContent[w.id]) {
                const stockUpdate = { ...w };
                stockUpdate.stock = stockUpdate.stock - cartContent[w.id];
                updateItem("wine", w.id, stockUpdate);
            }
            getData();
        });

        const resetCart = wineList.reduce((acc, wine) => {
            acc[wine.id] = 0;
            return acc;
        }, {});

        setMessage("Your order has been purchased");
        updateItem("cart", "thisIsCartId", resetCart);
        setCartContent(resetCart);
    };

    const handleClearCart = () => {
        const clearedCart = Object.fromEntries(
            Object.entries(cartContent).map((c) => {
                c[1] = 0;
                return c;
            }),
        );
        console.log(clearedCart);

        setCartContent(() => ({
            ...clearedCart,
        }));
        updateItem("cart", "thisIsCartId", clearedCart);
    };

    return (
        <div className={style.Cart}>
            <h1 style={{ marginBottom: "16px" }}>Cart</h1>
            {wineList.map((wine) => {
                if (cartContent[wine.id] > 0) {
                    return (
                        <div key={wine.id} className={style.Cart_Container}>
                            <div className={style.Cart_Item}>
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
                                        value={wine.id}>
                                        -
                                    </button>
                                    <p className={style.Cart_Count}>
                                        {cartContent[wine.id]}
                                    </p>
                                    <button
                                        className={style.Cart_Button}
                                        onClick={handleCartContent}
                                        value={wine.id}>
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
                <div className={style.Cart_Btns}>
                    <button
                        onClick={handleClearCart}
                        className={style.Checkout}>
                        Clear Cart
                    </button>
                    <button className={style.Checkout} onClick={handleCheckout}>
                        Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;
