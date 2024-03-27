import React, { useState } from "react";
import style from "./MainHome.module.css"
import imageProfile from "../../assets/icon.png"
const MainHome = () => {
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
    <div className={style.mainHome_Container}>
        <div className={style.mainHome_ContainerImage}>
            <img src={imageProfile} alt="imageProfile" />
        </div>
        <div className={style.mainHome_ContainerDescription}>
            <div className={style.mainHome_ContainerTitles}>
                <h1>Hola soy Julian Magallanes.  </h1>
                <div className={style.mainHome_line}></div>
                <p>Soy full Stack Developer, especializado en el Frontend de las aplicaciones web. Me gusta el trabajo en equipo, creo que los proyectos en conjunto llegan a mejores resultados.</p>
            </div>
            <div className={style.mainHome_ContainerButton}>
                <button className={style.buttonDark2} onClick={handleDeploy}>+</button>
                {deploy === true &&
                <>
                <a href="https://github.com/Julian-Magallanes" rel="noopener" target="_blank" className={style.buttonDark}>GitHub</a>
                <a href="https://www.linkedin.com/in/juli%C3%A1n-magallanes-2b074a187/" rel="noopener" target="_blank" className={style.buttonLigth}>Linkedln</a>
                <a href="https://drive.google.com/file/d/102D9Xdrinpob5NAu2kn2oyWXw4ePZCsG/view?usp=drive_link" rel="noopener" target="_blank" className={style.buttonLigth}>Curriculum</a>
                <a href="https://wa.me/542613012708" rel="noopener" target="_blank" className={style.buttonDark}>Whatsapp</a>
                <button className={style.buttonLigth2} onClick={handleDismantle}>-</button>
                </>
                }
            </div>
        </div>
    </div>
    )
}
export default MainHome