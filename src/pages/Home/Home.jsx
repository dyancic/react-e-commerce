import React from "react";
import style from "./Home.module.scss";
import Featured from "../../containers/Featured";

const Home = () => {
    return (
        <div className={style.Home}>
            <Featured />
        </div>
    );
};

export default Home;
