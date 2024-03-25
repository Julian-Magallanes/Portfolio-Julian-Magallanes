import React from "react";
import style from "./Skills.module.css"
import CardSkill from "../../components/CardSkill/CardSkill";

const Skills = () => {
    return(
    <div className={style.skillsContainer}>
        <div>
            <h1>Tecnologias Conocidas</h1>
            <p>Estas son utilizadas en todos los proyectos elaborados</p>
            <div className={style.skillsContainerCard}>
                <CardSkill/>
            </div>
        </div>
    </div>
    )
}
export default Skills