import React from "react";
import style from "./ScrollBars.module.css"

const ScrollBars = () => {
    return(
    <div className={style.scrollContainer}>
        <div className={style.scrollText}>
            <h4>01 / 05</h4>
        </div>
        <div className={style.scrollBarsY}></div>   
        <ul>
            <li>
                <button type="button" className={style.scrollBars}/>
            </li>
            <li>
                <button type="button" className={style.scrollBars}/>
            </li>
            <li>
                <button type="button" className={style.scrollBars}/>
            </li>
            <li>
                <button type="button" className={style.scrollBars}/>
            </li>
            <li>
                <button type="button" className={style.scrollBars}/>
            </li>
        </ul>
        
    </div>
    )
}
export default ScrollBars