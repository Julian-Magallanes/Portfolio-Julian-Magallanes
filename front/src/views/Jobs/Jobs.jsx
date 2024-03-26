import React from "react";
import style from "./Jobs.module.css"
import CardJobs from "../../components/CardJobs/CardJobs";

const Jobs = () => {
    return(
    <div className={style.jobsContainer} id="Jobs">
        <CardJobs/>
    </div>
    )
}
export default Jobs