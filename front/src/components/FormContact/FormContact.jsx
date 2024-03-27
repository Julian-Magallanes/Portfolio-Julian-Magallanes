import React, { useRef, useState } from "react";
import style from "./FormContact.module.css"
import imgEmail from "../../assets/VectorEmail.png"
import imgWtps from "../../assets/VectorWtps.png"
import imgLinkedin from "../../assets/VectorLinkedin.png"
import imgX from "../../assets/iconX.png"
import { Link, useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

const FormContact = () => {
    const form = useRef();
    const navigate = useNavigate();
    const [userContact, setUserContact]= useState({
        user_name:"",
        phone:"",
        user_email:"",
        message:"",
    })
    const handleInputChange = (event) =>{
        const{name, value} = event.target
        setUserContact({
        ...userContact,
            [name]: value,
        });
        }
  const sendEmail = (e) => {
    e.preventDefault();
    if (!userContact.user_name || !userContact.phone || !userContact.user_email || !userContact.message) {
        console.log("faltan datos");
        return; 
    }
    emailjs
      .sendForm('service_3mf1s0f', 'template_82ctht4', form.current, {
        publicKey: 'vtXV4AT5sA3o-7yjY',
      })
      .then(
        () => {
            Swal.fire({
                title: "Se envio el mensaje correctamente",
                icon: "success",
                timer: 1000,
                showConfirmButton:false
              });
              navigate("/")
        },
        (error) => {
          console.log('FAILED...', error.text);
          Swal.fire({
            title: "Hubo un erro al enviar el mensaje",
            icon: "error",
            timer: 1000,
            showConfirmButton:false
          });
        },
      );
  };
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
            <form ref={form} onSubmit={sendEmail}>
                <div className={style.FormSection}>
                    <label htmlFor="">Nombre</label>
                    <input type="text" name="user_name" value={userContact.name} onChange={handleInputChange}/>
                </div>
                <div className={style.FormSection}>
                    <label htmlFor="">Telefono</label>
                    <input type="number"  name="phone" value={userContact.phone} onChange={handleInputChange}/>
                </div>
                <div className={style.FormSection}>
                    <label htmlFor="">Correo electronico</label>
                    <input type="email" name="user_email" value={userContact.email} onChange={handleInputChange}/>
                </div >
                <div className={style.FormSection}>
                    <label htmlFor="">Mensaje</label>
                    <textarea name="message" value={userContact.message} onChange={handleInputChange}/>
                </div>
                <div className={style.FormSectionSubmit}>
                    <input type="submit" placeholder="Enviar" value="Send"/>
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