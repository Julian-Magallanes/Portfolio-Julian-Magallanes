import React from "react";
import style from "./Home.module.css"
import MainHome from "../../components/MainHome/MainHome";

const Home = () => {
    return(
    <div className={style.homeContainer}>
        <MainHome/>
    </div>
    )
}
export default Home