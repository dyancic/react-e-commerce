import Nav from "./containers/Nav";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Footer from "./components/Footer/Footer";
import DataInterface from "./pages/DatabaseInterface/DataInterface";
import style from "./App.module.scss";
import CartProvider from "./context/CartContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFromDatabase } from "./services/server";

function App() {
    const [wineList, setWineList] = useState([]);
    const getData = async () => {
        const data = await getFromDatabase("wine");
        setWineList(data);
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <CartProvider>
            <BrowserRouter>
                <Nav />{" "}
                <div className={style.App}>
                    <Routes>
                        <Route
                            path="/"
                            element={<Home wineList={wineList} />}
                        />
                        <Route
                            path="/cart"
                            element={<Cart wineList={wineList} />}
                        />
                        <Route
                            path="/database"
                            element={
                                <DataInterface
                                    getData={getData}
                                    wineList={wineList}
                                />
                            }
                        />
                        <Route path="/product/:wineId" element={<Product />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;
