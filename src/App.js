import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./containers/Nav";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { useEffect, useState } from "react";
import { getFromDatabase } from "./services/server";

function App() {
    const [wineList, setWineList] = useState([]);

    const blogs = getFromDatabase("blogs");
    console.log(blogs);

    const getData = async () => {
        const data = await getFromDatabase("wine");
        setWineList(data);
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home wineList={wineList} />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
