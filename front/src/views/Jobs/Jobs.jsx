import React, { useEffect, useState } from "react";
import style from "./Jobs.module.css";
import CardJobs from "../../components/CardJobs/CardJobs";
import axios from "axios";
import { swiffyslider } from 'swiffy-slider'
window.swiffyslider = swiffyslider;

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
        axios
        .get(`${api}/jobs`)
        .then((response) => {
            setJobs(response.data);
            console.log(response.data); 
        })
        .catch((error) => {
            console.error('Error fetching jobs:', error);
        });
    }, []);

    return (
        <div className={style.jobsContainer} id="Jobs">
            <div className="swiffy-slider slider-item-show3 slider-item-reveal slider-nav-dark slider-nav-outside-expand">
                <ul className="slider-container py-4" id="slider2">
            {jobs.map((pages) => {
                return <li><CardJobs key={pages.id} pages={pages}/></li>
            })
            }
                </ul>
                <button type="button" class="slider-nav" aria-label="Go to previous"></button>
                <button type="button" class="slider-nav slider-nav-next" aria-label="Go to next"></button>
            </div>
        </div>
    );
};

export default Jobs;