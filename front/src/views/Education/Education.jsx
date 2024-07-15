import React, { useState } from "react";
import style from "./Education.module.css"
import imageEducation from "../../assets/Group.png"
const Education = () => {
    const [deploy, setDeploy] = useState(false)
    const handleDeploy = () => {
        if(deploy===false){
            setDeploy(true)
        }else(
            setDeploy(false) 
        )
    }
    const handleDismantle = () => {
        setDeploy(false)
    }
    return(
    <div className={style.educationContainer} id="Education">
        <img src={imageEducation} alt="imageEducation" />
        <div className={style.education}>
            <div className={style.educationCardLeft} id="universidad">
                <h4>
                    Universidad de Mendoza
                </h4>
                <h6>
                    <div><i>Arquitecto</i></div>
                    Arquitectura - 2014 -2020
                </h6>
                <a href="https://drive.google.com/file/d/1PNFQmmSWNPXKzuHfLk1CR2h99KsmdaXR/view?usp=sharing" rel="noopener" target="_blank">CERTIFICADO</a>
            </div>
            <div className={style.educationCardLeft} id="coderhause">
                <h4>
                    CURSO DE CODERHOUSE
                </h4>
                <h6> 
                    <div><i>Carrera de Desarrollo Web</i></div>
                    HTML - CSS - GIT - SASS -Bootstrap Javascript - React
                </h6>
                <div className={style.educationDeploy}>
                    <button onClick={handleDeploy}>+</button>
                    {deploy === true &&
                    <>
                        <a href="https://drive.google.com/file/d/1vfjffV3od27AQp1y_gEpnCjWfPrE4XJS/view?usp=sharing" rel="noopener" target="_blank">DESARROLLO WEB</a>
                        <a href="https://drive.google.com/file/d/13xv-kvym_ydEubwuUGQgM8UpAKKuo02b/view?usp=sharing" rel="noopener" target="_blank">JAVASCRIPT</a>
                        <a href="https://drive.google.com/file/d/1mHpnCM0JlPFeAPc_KJvE-VNbMCN126aI/view?usp=sharing" rel="noopener" target="_blank">REACT JS</a>
                        <a href="https://drive.google.com/file/d/1hraX7J71UO1HA3q0VW2RLuw3e2vEirQy/view?usp=sharing" rel="noopener" target="_blank">FRONTEND</a>
                        <button onClick={handleDismantle}>-</button>
                    </>}
                </div>
            </div>
            <div className={style.educationCardRigth} id="henry">
                <h4>
                    BOOTCAMP - SOY HENRY
                </h4>
                <h6> 
                    <div><i>FullStack Developer</i></div>
                    Javascript - Typescript- React.js
                    Node. - Express - Taildwind - MongoDB - ProgresSQL
                    -Next.js - Astro
                </h6>
                *<a href="https://drive.google.com/file/d/1O2S1x942trF2EhPjtFNrxneul44aVLwi/view?usp=sharing" rel="noopener" target="_blank">CERTIFICADO</a>
            </div>
            <div className={style.educationCardLeft} id="autodidacta">
                <h4>
                    AUTODIDACTA
                </h4>
                <h6> 
                    Amazon Web Services 
                </h6>
            </div>
        </div>
    </div>
    )

}
export default Education