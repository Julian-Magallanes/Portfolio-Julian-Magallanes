import React from "react";
import style from "./CardJobs.module.css"
import imageGitHub from "../../assets/github.svg"
import imageShare from "../../assets/share-line.svg"
const CardJobs = () => {
    return(
    <div className={style.cardJobsContainer}>
        <div className={style.cardJobsImage}>

        </div>
        <div className={style.cardJobsText}> 
            <h4>Titulo de Proyecto</h4>
            <p>Tecnologias Utilizadas</p>
            <div className={style.cardJobsTextImage}>
                <a href="https://github.com/Julian-Magallanes"><img src={imageGitHub} alt="imageGitHub" /></a>
                <a href="https://github.com/Julian-Magallanes"><img src={imageShare} alt="imageShare" /></a>
            </div>
        </div>
    </div>
    )
}
export default CardJobs