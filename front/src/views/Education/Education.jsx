import React from "react";
import style from "./Education.module.css"

const Education = () => {
    return(
    <div className={style.educationContainer}>
        <div className={style.education}>
            <div className={style.educationCardLeft}>
                <h4>
                    Universidad de Mendoza
                </h4>
                <h6>
                    <i>Arquitecto, Arquitectura - 2014 -2020</i>
                </h6>
                <button>CERTIFICADO</button>
            </div>
            <div className={style.educationCardLeft}>
                <h4>
                    CURSO DE CODERHOUSE
                </h4>
                <h6> 
                    <i>Carrera de Desarrollo Web</i>
                    HTML - CSS - GIT - SASS -Bootstrap Javascript - React
                </h6>
                <button>CERTIFICADO</button>
            </div>
            <div className={style.educationCardRigth}>
                <h4>
                    BOOTCAMP - SOY HENRY
                </h4>
                <h6> 
                    <i>FullStack Developer</i>
                    Javascript - Tipescript- React.js
                    Node.js - Mongo DB - Progrest 
                    -Next.js - Nest/js 
                </h6>
                <button>CERTIFICADO</button>
            </div>
            <div className={style.educationCardLeft}>
                <h4>
                    AUTODIDACTA
                </h4>
                <h6> 
                    Amazon Web Services 
                </h6>
                <button>CERTIFICADO</button>
            </div>
        </div>
    </div>
    )
}
export default Education