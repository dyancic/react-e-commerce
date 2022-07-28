import React from "react";
import style from "./Home.module.scss";
import Featured from "../../containers/Featured";
import Shop from "../../containers/Shop/Shop";
import { useEffect, useState } from "react";
import { getFromDatabase } from "../../services/server";

const Home = ({ wineList }) => {
    const [blogs, setBlogs] = useState([]);
    const getData = async () => {
        const data = await getFromDatabase("blogs");
        setBlogs(data);
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className={style.Home}>
            <Featured blogs={blogs} />
            <Shop wineList={wineList} />
        </div>
    );
};

export default Home;
