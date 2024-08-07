import React, { useState } from "react";
import style from "./MainHome.module.css"

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
            <img src="https://res.cloudinary.com/dzxrc9b6o/image/upload/v1714054099/Portfolio/Tecnologias/profile_2_pvpomz.jpg" alt="imageProfile" />
        </div>
        <div className={style.mainHome_ContainerDescription}>
            <div className={style.mainHome_ContainerTitles}>
                <span className={style.textTitle}>Hola soy Julian Magallanes.  </span>
                <div className={style.mainHome_line}></div>
                <p>Soy full Stack Developer, especializado en el Frontend de las aplicaciones web. Me gusta el trabajo en equipo, creo que los proyectos en conjunto llegan a mejores resultados.</p>
            </div>
            <div className={style.mainHome_ContainerButton}>
                <button className={style.buttonDark2} onClick={handleDeploy} style={window.innerWidth <= 420 ? { display: "none" } : {}}>+</button>
                {(deploy === true || window.innerWidth <= 420 ) &&
                <>
                <a href="https://github.com/Julian-Magallanes" rel="noopener" target="_blank" className={style.buttonDark} style={window.innerWidth <= 420 ? { marginLeft: "0" } : {}}>GitHub</a>
                <a href="https://www.linkedin.com/in/juli%C3%A1n-magallanes-2b074a187/" rel="noopener" target="_blank" className={style.buttonLigth}>Linkedln</a>
                <a href="https://drive.google.com/file/d/1qqwlBmmD4hBEeEg3CHmNxdhDRE3s1DHF/view?usp=drive_link" rel="noopener" target="_blank" className={style.buttonLigth}>Curriculum</a>
                <a href="https://wa.me/542613012708" rel="noopener" target="_blank" className={style.buttonDark} style={window.innerWidth <= 420 ? { marginRight: "0" } : {}}>Whatsapp</a>
                <button className={style.buttonLigth2} onClick={handleDismantle} style={window.innerWidth <= 420 ? { display: "none" } : {}}>-</button>
                </>
                }
            </div>
        </div>
    </div>
    )
}
export default MainHome