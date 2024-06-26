import React from "react";
import style from "./CardJobs.module.css"
import imageGitHub from "../../assets/github.svg"
import imageShare from "../../assets/share-line.svg"

const CardJobs = (props) => {
    const {description,skills,title,urlGitHub,urlImage,urlPage} = props.pages
    
    return(
    <div className={style.cardJobsContainer}>
        <div className={style.cardJobsImage}>
            <img src={urlImage} alt="imageJobs" loading="lazy" />
        </div>
        <div className={style.cardJobsText}> 
            <h4>{title}</h4>
            <h6>{description}</h6>
            <p>{skills}</p>
            <div className={style.cardJobsTextImage}>
                <a href={urlGitHub} rel="noopener"target="_blank"><img src={imageGitHub} alt="imageGitHub" /></a>
                {urlPage !== " " ? (
                        <a href={urlPage} rel="noopener" target="_blank">
                            <img src={imageShare} alt="imageShare" />
                        </a>
                    ) : null}
            </div>
        </div>
    </div>
    )
}
export default CardJobs