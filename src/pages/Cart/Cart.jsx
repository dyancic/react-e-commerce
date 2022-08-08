import React, { useContext, useEffect, useState } from "react";
import style from "./Cart.module.scss";
import { CartContext } from "../../context/CartContext";

const Cart = ({ wineList }) => {
    const { cartContent, setCartContent } = useContext(CartContext);
    const [incDec, setIncDec] = useState(cartContent);

    const handleCartContent = (e) => {
        const newCart = cartContent;
        const eventWine = wineList.find((w) => w.name === e.target.value);

        if (
            e.target.innerText === "+" &&
            eventWine.stock > incDec[eventWine.name]
        ) {
            ++newCart[e.target.value];
        }
        if (e.target.innerText === "-") {
            --newCart[e.target.value];
        }
        setIncDec(newCart);
        setCartContent(newCart);
    };

    useEffect(() => {
        console.log(cartContent);
    }, []);

    return (
        <div className={style.Cart}>
            <h1>Cart</h1>
            <div className={style.Cart_Container}>
                {wineList.map((wine) => {
                    if (cartContent[wine.name] > 0) {
                        return (
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
                                    <p>{incDec[wine.name]}</p>
                                    <button
                                        className={style.Cart_Button}
                                        onClick={handleCartContent}
                                        value={wine.name}>
                                        +
                                    </button>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default Cart;
