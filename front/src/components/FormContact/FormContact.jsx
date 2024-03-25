import React from "react";
import style from "./FormContact.module.css"
import imgEmail from "../../assets/VectorEmail.png"
import imgWtps from "../../assets/VectorWtps.png"
import imgLinkedin from "../../assets/VectorLinkedin.png"
import imgX from "../../assets/iconX.png"
import { Link } from "react-router-dom";

const FormContact = () => {
    return(
    <div className={style.mainHomeContainer}>
        <span className={style.mainHomeBlur}></span>
        <div className={style.FormContainer}>
            <div className={style.FormTitle}>
                <span></span>
                <h1>Contactame</h1>
                <Link to="/">
                    <img src={imgX} alt="" />
                </Link>
            </div>
            <form action="">
                <div className={style.FormSection}>
                    <label htmlFor="">Name</label>
                    <input type="text" />
                </div>
                <div className={style.FormSection}>
                    <label htmlFor="">Telefono</label>
                    <input type="number" />
                </div>
                <div className={style.FormSection}>
                    <label htmlFor="">Correo electronico</label>
                    <input type="email" />
                </div >
                <div className={style.FormSection}>
                    <label htmlFor="">Mensaje</label>
                    <input type="text" />
                </div>
                <div className={style.FormSectionSubmit}>
                    <input type="submit" placeholder="Enviar"/>
                    <input type="reset" placeholder="Limpiar Formulario"/>
                </div>
            </form>
            <div className={style.FormSectionRrss}>
                <p>Sino comunicate conmigo por mis Redes Sociales</p>
                <img src={imgEmail} alt="imgEmail" />
                <img src={imgWtps} alt="imgWtps" />
                <img src={imgLinkedin} alt="imgLinkedin" />
            </div>
        </div>
    </div>
    )
}
export default FormContact