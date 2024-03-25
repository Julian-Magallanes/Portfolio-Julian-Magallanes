import React from "react";
import style from "./CardSkill.module.css"
import imageHtml from "../../assets/html-logo.png"

const CardSkill = () => {
    return(
    <div className={style.cardSkillContainer}>
        <img src={imageHtml} alt="imageHtml" />
        <h4>Html</h4>
    </div>
    )
}
export default CardSkill