import React from "react";
import style from "./Navbar.module.css"
import ButtonContact from "../ButtonContact/ButtonContact";

const Navbar = () => {
    return(
    <div className={style.nabvar_Container}>
        <div className={style.nabvar_ContainerSep}></div>
        <ul className={style.nabvar_ContainerList}>
            <li>Home</li>
            <li>Sobre mi</li>
            <li>Trabajos Realizados</li>
            <li>Estudios</li>
            <li>Tecnologias</li>
        </ul>
        <ButtonContact/>
    </div>
    )
}
export default Navbar