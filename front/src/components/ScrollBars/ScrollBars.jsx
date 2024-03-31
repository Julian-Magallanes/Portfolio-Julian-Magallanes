import React, { useEffect, useState } from "react";
import style from "./ScrollBars.module.css"
import {Link} from "react-scroll"
const ScrollBars = () => {
    const [click, setClick] = useState(false)

    const handleSetActive = () => setClick(false)

    const [formColor, setFormColor] = useState('#1C252F'); // Estado para el color del texto
    const [pagina, setPagina] = useState('01')
    useEffect(() => {
        // Función para manejar el evento de desplazamiento
        const handleScroll = () => {
          // Obtener la posición vertical actual de la página
          const scrollPosition = window.scrollY;
          const windowHeight = window.innerHeight;
          // Cambiar el color del texto basado en la posición vertical
          if (scrollPosition < windowHeight) {
            setFormColor("#1C252F");
            setPagina("01");
          } else if (scrollPosition < 2 * windowHeight) {
            setFormColor("#D5FF40");
            setPagina("02");
          } else if (scrollPosition < 3 * windowHeight) {
            setFormColor("#1C252F");
            setPagina("03");
          } else if (scrollPosition < 4 * windowHeight) {
            setFormColor("#D5FF40");
            setPagina("04");
          } else {
            setFormColor("#1C252F");
            setPagina("05");
          }
        };
        window.addEventListener('scroll', handleScroll);

    // Limpiar el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return(
    <div className={style.scrollContainer}>
        <div className={style.scrollText} style={{ color: formColor }}>
            <h4>{pagina}/ 05</h4>
        </div>
        <div className={style.scrollBarsY} style={{ color: formColor, background: formColor }}></div>   
        <ul>
            <li>
                <Link 
                to="Home" 
                spy={true} 
                smooth={true}  
                duration={1000} 
                onClick={handleSetActive}
                style={{padding:"0px", height: "3px"}}
                activeStyle={{border:"none"}}
                >
                <button type="button" className={style.scrollBars} style={{ color: formColor, background: formColor }} id="button1"/>
                </Link>
            </li>
            <li>
                <Link 
                to="AboutMe" 
                spy={true} 
                smooth={true}  
                duration={1000} 
                onClick={handleSetActive}
                style={{padding:"0px" }}
                activeStyle={{border:"none"}}
                >
                <button type="button" className={style.scrollBars} style={{ color: formColor, background: formColor }} id="button2"/>
                </Link>
            </li>
            <li>
                <Link 
                to="Jobs" 
                spy={true} 
                smooth={true}  
                duration={1000} 
                onClick={handleSetActive}
                style={{padding:"0px"}}
                activeStyle={{border:"none"}}
                >
                <button type="button" className={style.scrollBars} style={{ color: formColor, background: formColor }} id="button3"/>
                </Link>
            </li>
            <li>
                <Link 
                to="Education" 
                spy={true} 
                smooth={true}  
                duration={1000} 
                onClick={handleSetActive}
                style={{padding:"0px"}}
                activeStyle={{border:"none"}}
                >
                <button type="button" className={style.scrollBars} style={{ color: formColor, background: formColor }} id="button4"/>
                </Link>
            </li>
            <li>
            <Link 
                to="Skills" 
                spy={true} 
                smooth={true}  
                duration={1000} 
                onClick={handleSetActive}
                style={{padding:"0px"}}
                activeStyle={{border:"none"}}

                >
                <button type="button" className={style.scrollBars} style={{ color: formColor, background: formColor }} id="button5"/>
                </Link>
            </li>
        </ul>
        
    </div>
    )
}
export default ScrollBars