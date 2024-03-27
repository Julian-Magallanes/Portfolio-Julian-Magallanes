import React, { useEffect, useState } from "react";
import style from "./Jobs.module.css";
import CardJobs from "../../components/CardJobs/CardJobs";
import axios from "axios";

const Jobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axios
        .get("http://localhost:3002/jobs")
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
            {jobs.map((pages) => {
                return <CardJobs key={pages.id} pages={pages}/>
            })
            }
        </div>
    );
};

export default Jobs;