import React from "react";
import style from "./MainHome.module.css"
import imageProfile from "../../assets/icon.png"
const MainHome = () => {
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
                <button className={style.buttonDark2}>+</button>
                <button className={style.buttonDark}>GitHub</button>
                <button className={style.buttonLigth}>Linkedln</button>
                <button className={style.buttonLigth}>Curriculum</button>
                <button className={style.buttonDark}>Trabajos</button>
                <button className={style.buttonLigth2}>-</button>
            </div>
        </div>
    </div>
    )
}
export default MainHome