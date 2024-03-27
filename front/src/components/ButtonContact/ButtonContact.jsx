import React, { useEffect, useState } from "react";
import style from "./ButtonContact.module.css"
import { Link } from "react-router-dom";

const ButtonContact = () => {

    const [textColor, setTextColor] = useState("#D5FF40");
    const [backgroundColor, setBackgroundColor] = useState("#1C252F"); // Estado para el color del texto
  useEffect(() => {
    // Función para manejar el evento de desplazamiento
    const handleScroll = () => {
      // Obtener la posición vertical actual de la página
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      // Cambiar el color del texto basado en la posición vertical
      if (scrollPosition < windowHeight) {
        setTextColor("#D5FF40");
        setBackgroundColor("#1C252F");
      } else if (scrollPosition < 2 * windowHeight) {
        setTextColor("#1C252F");
        setBackgroundColor("#D5FF40");
      } else if (scrollPosition < 3 * windowHeight) {
        setTextColor("#D5FF40");
        setBackgroundColor("#1C252F");
      } else if (scrollPosition < 4 * windowHeight) {
        setTextColor("#1C252F");
        setBackgroundColor("#D5FF40");
      } else {
        setTextColor("#D5FF40");
        setBackgroundColor("#1C252F");
      }
    };

    // Agregar un listener para el evento de desplazamiento
    window.addEventListener('scroll', handleScroll);

    // Limpiar el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return(
    <div>
        <Link to="/Contact">
            <div className={style.buttonContactContainer} style={{color:textColor, background:backgroundColor}}>
                <p>Contactame</p>
            </div>
        </Link>
    </div>
    )
}
export default ButtonContact