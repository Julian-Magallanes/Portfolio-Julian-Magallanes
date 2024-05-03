import React, { useEffect, useState } from "react";
import style from "./Jobs.module.css";
import CardJobs from "../../components/CardJobs/CardJobs";
import axios from "axios";
import { swiffyslider } from 'swiffy-slider'
window.swiffyslider = swiffyslider;
import PortfolioJobs from "../../helper/preload";
import imageGitHub from "../../assets/githubDark.svg"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
window.addEventListener("load", () => {
    window.swiffyslider.init();
});
const api = import.meta.env.VITE_API_URL
// import Swiffy Slider CSS
import "swiffy-slider/css"
const Jobs = () => {
    const [jobs, setJobs] = useState([]);


    useEffect(() => {
        setJobs(PortfolioJobs);
        /*axios
        .get(`${api}/jobs`)
        .then((response) => {
            setJobs(response.data);
            console.log(response.data); 
        })
        .catch((error) => {
            console.error('Error fetching jobs:', error);
        });*/
    }, []);

    return (
        <div className={style.jobsContainer} id="Jobs">
            <h1>Trabajos realizados</h1>
            <p>Estos son trabajos realizados y tecnologías utilizadas.</p>
            <div className="swiffy-slider slider-item-show3 slider-item-reveal slider-nav-dark slider-nav-outside-expand">
                <ul className="slider-container py-4" id="slider2">
                    {jobs.map((pages) => (
                        <li key={pages.id}>
                            <CardJobs pages={pages} />
                        </li>
                    ))}
                </ul>
                <button type="button" className="slider-nav" aria-label="Ir al anterior"></button>
                <button type="button" className="slider-nav slider-nav-next" aria-label="Ir al siguiente"></button>
            </div>
            <a href="https://github.com/Julian-Magallanes/Portfolio-Julian-Magallanes" rel="noopener"target="_blank" className={style.jobsRepository}><p >Visita el repositorio de este portfolio aca <img src={imageGitHub} alt="imageGitHub" /></p></a>

        </div>
    );
};

export default Jobs;