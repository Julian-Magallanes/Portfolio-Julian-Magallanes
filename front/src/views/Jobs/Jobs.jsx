import React from "react";
import style from "./Jobs.module.css"
import CardJobs from "../../components/CardJobs/CardJobs";

const Jobs = () => {
    return(
    <div className={style.jobsContainer}>
        <CardJobs/>
    </div>
    )
}
export default Jobs