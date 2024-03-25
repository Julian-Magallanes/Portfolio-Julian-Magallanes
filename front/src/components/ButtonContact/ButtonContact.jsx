import React from "react";
import style from "./ButtonContact.module.css"
import { Link } from "react-router-dom";

const ButtonContact = () => {
    return(
    <div>
        <Link to="/Contact">
            <div className={style.buttonContactContainer}>
                <p>Contactame</p>
            </div>
        </Link>
    </div>
    )
}
export default ButtonContact