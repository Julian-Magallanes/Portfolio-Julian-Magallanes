import React, { useEffect, useState } from "react";
import style from "./Skills.module.css"
import CardSkill from "../../components/CardSkill/CardSkill";
import axios from "axios";


const Skills = () => {
    const [skills, setSkills] = useState([]);
    

    useEffect(() => {
        axios
        .get("http://localhost:3002/skills")
        .then((response) => {
            setSkills(response.data);
            console.log(response.data); 
        })
        .catch((error) => {
            console.error('Error fetching jobs:', error);
        });
    }, []);
    return(
        
    <div className={style.skillsContainer} id="Skills">
        <div>
            <h1>Tecnologias Conocidas</h1>
            <p>Estas son utilizadas en todos los proyectos elaborados</p>

            


                <div className={style.skillsContainerCard}>
                    {skills.map((tecnology) => {
                        return <CardSkill key={tecnology?.id} tecnology={tecnology}/>
                    })
                    }
                    
                </div>
  
        </div>
    </div>
    )
}
export default Skills