import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./containers/Nav";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
