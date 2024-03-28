import React, { useEffect, useState } from "react";
import style from "./Skills.module.css"
import CardSkill from "../../components/CardSkill/CardSkill";
import axios from "axios";
import { swiffyslider } from 'swiffy-slider'
window.swiffyslider = swiffyslider;
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
window.addEventListener("load", () => {
    window.swiffyslider.init();
});

// import Swiffy Slider CSS
import "swiffy-slider/css"

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
            <div className="swiffy-slider slider-item-show5 slider-nav-outside slider-nav-dark slider-nav-sm slider-nav-visible slider-nav-page slider-item-snapstart slider-nav-autoplay slider-nav-autopause slider-item-ratio-contain slider-item-ratio-32x9py-3 py-lg-4" data-slider-nav-autoplay-interval="2000">
                <div className="slider-container">
                    {skills.map((tecnology) => {
                        return <CardSkill key={tecnology?.id} tecnology={tecnology}/>
                    })
                    }   
                </div>
            <button type="button" class="slider-nav" aria-label="Go left"></button>
            <button type="button" class="slider-nav slider-nav-next" aria-label="Go left"></button>
            </div>
        </div>
    </div>
    )
}
export default Skills