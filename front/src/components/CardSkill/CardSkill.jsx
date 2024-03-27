import React from "react";
import style from "./CardSkill.module.css"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
const CardSkill = (props) => {
    const {title,urlImage} = props.tecnology
    return(
    <div className={style.cardSkillContainer}>
        <img src={urlImage} alt="imageHtml" />
        <h4>{title}</h4>
    </div>
    )
}
export default CardSkill