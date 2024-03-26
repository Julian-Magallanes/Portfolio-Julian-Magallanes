import React from "react";
import style from "./Navbar.module.css"
import ButtonContact from "../ButtonContact/ButtonContact";
import {Link} from "react-scroll"
import { useState } from "react";

const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleSetActive = () => setClick(false)

    return(
    <div className={style.nabvar_Container}>
        <div className={style.nabvar_ContainerSep}></div>
        <ul className={style.nabvar_ContainerList}>
            <li>
                <Link 
                    to="Home" 
                    spy={true} 
                    smooth={true}  
                    duration={1000} 
                    onClick={handleSetActive}
                    >       
                Home
                </Link>
            </li>
            <li>
                <Link  
                    to="AboutMe" 
                    spy={true} 
                    smooth={true} 
                    duration={1000} 
                    onClick={handleSetActive}
                    >  
                Sobre mi
                </Link>
            </li>
            <li>
                <Link  
                    to="Jobs" 
                    spy={true} 
                    smooth={true} 
                    duration={1000} 
                    onClick={handleSetActive}
                    >  
                Trabajos Realizados
                </Link>
            </li>
            <li>
                <Link  
                    to="Education" 
                    spy={true} 
                    smooth={true} 
                    duration={1000} 
                    onClick={handleSetActive}
                    >  
                Estudios
                </Link>
            </li>
                
            <li>
                <Link  
                    to="Skills" 
                    spy={true} 
                    smooth={true} 
                    duration={1000} 
                    onClick={handleSetActive}
                    >  
                Tecnologias
                </Link>
            </li>
        </ul>
                
        <ButtonContact/>
    </div>
    )
}
export default Navbar