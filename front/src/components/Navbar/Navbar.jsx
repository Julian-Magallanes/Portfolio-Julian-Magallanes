import React from "react";
import style from "./Navbar.module.css"
import ButtonContact from "../ButtonContact/ButtonContact";
import {Link} from "react-scroll"
import { useState, useEffect } from "react";

const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleSetActive = () => setClick(false)

    const [textColor, setTextColor] = useState('#1C252F'); // Estado para el color del texto
    const [borderColor, setBorderColor] = useState('#1C252F')
  useEffect(() => {
    // Función para manejar el evento de desplazamiento
    const handleScroll = () => {
      // Obtener la posición vertical actual de la página
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      // Cambiar el color del texto basado en la posición vertical
      if (scrollPosition < windowHeight) {
        setTextColor("#1C252F");
        setBorderColor("#1C252F");
      } else if (scrollPosition < 2 * windowHeight) {
        setTextColor("#D5FF40");
        setBorderColor("#D5FF40");
      } else if (scrollPosition < 3 * windowHeight) {
        setTextColor("#1C252F");
        setBorderColor("#1C252F");
      } else if (scrollPosition < 4 * windowHeight) {
        setTextColor("#D5FF40");
        setBorderColor("#D5FF40");
      } else {
        setTextColor("#1C252F");
        setBorderColor("#1C252F");
      }
    };

    // Agregar un listener para el evento de desplazamiento
    window.addEventListener('scroll', handleScroll);

    // Limpiar el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [menuAnimation, setMenuAnimation] = useState(false);
  const toggleDropdown = () => {
      setDropdownVisible(!dropdownVisible);
      setMenuAnimation(!menuAnimation);
    };
    return(
    <div className={style.nabvar_Container} style={{ color: textColor, border: borderColor }}>
        <div className={style.nabvar_ContainerSep}></div>
        <div className={style.ToggleIcon} onClick={() => toggleDropdown()}>
            <div className={`${style.NavbarMenuIcon1} ${menuAnimation ? style.Animation : ''}`} ></div>
            <div className={`${style.NavbarMenuIcon2} ${menuAnimation ? style.Animation : ''}`} ></div>
            <div className={`${style.NavbarMenuIcon3} ${menuAnimation ? style.Animation : ''}`}></div>
        </div>
        <ul className={`${style.nabvar_ContainerList} ${dropdownVisible ? style.Visible : ''}`}>
          
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