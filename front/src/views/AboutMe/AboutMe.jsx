import React, { useState } from "react";
import style from "./AboutMe.module.css"
import imageMontaint from "../../assets/mountain.png"
import imageAvion from "../../assets/avion2.png"
import imageMetas from "../../assets/metas.png"
const AboutMe = () => {
    const [textVisible, setTextVisible] = useState(false);
    const [textVisible2, setTextVisible2] = useState(false);
    const [textVisible3, setTextVisible3] = useState(false);
    const [textVisible4, setTextVisible4] = useState(false);
    const clickHandle = () => {
        setTextVisible(!textVisible);
      };
      const clickHandle2 = () => {
        setTextVisible2(!textVisible2);
      };
      const clickHandle3 = () => {
        setTextVisible3(!textVisible3);
      };
      const clickHandle4 = () => {
        setTextVisible4(!textVisible4);
      };
    return(
    <div className={style.aboutMeContainer} id="AboutMe">
        <div className={style.aboutMeSection1} onClick={clickHandle}>
            <img src={imageMontaint} alt="imageMontaint" />
            {textVisible === true && <p>
                ¡Hola! Soy un apasionado de la programación con sede en <strong>Mendoza, Argentina, tierra del Aconcagua.</strong> Mi viaje comenzó en el mundo de la arquitectura, donde desarrollé una sólida base de habilidades creativas y analíticas. Sin embargo, mi verdadera pasión siempre ha sido la programación.
            </p>}
            {textVisible === false && <h4>
                PRESENTACION
            </h4>}
        </div>
        <div className={style.aboutMeSection2}>
            <div className={style.grid1} onClick={clickHandle2}>
                {textVisible2 === true && <p>
                    A lo largo de mi carrera como arquitecto, he dedicado tiempo y esfuerzo a estudiar y practicar programación de forma autodidacta.<strong> En el 2023 decidí que esto dejaría de ser un hobby y comenzaría a ser mi vida.</strong>
                </p>}
                {textVisible2 === false && <h4>
                    NUEVOS DESAFIOS
                </h4>}
            </div>
            <div className={style.grid2} onClick={clickHandle3}>
                <img src={imageAvion} alt="imageAvion" />
                {textVisible3 === true &&  <p>
                    Además de mi dedicación a la programación, soy un ávido viajero. Explorar nuevos lugares y culturas amplía mi perspectiva y alimenta mi creatividad. <strong>Sueño con poder combinar mi pasión por la programación con mi amor por los viajes</strong>, trabajando de forma remota mientras descubro nuevos destinos y experiencias en todo el mundo.
                </p>}
                {textVisible3 === false && <h4>
                    SUEÑOS
                </h4>}
            </div>
        </div>
        <div className={style.aboutMeSection3} onClick={clickHandle4}>
            <img src={imageMetas} alt="imageMetas" />
            {textVisible4 === true && <p>
                Estoy emocionado por seguir <strong>mi viaje en el mundo de la programación</strong>, buscando oportunidades para contribuir a proyectos significativos y colaborar con personas talentosas de todo el mundo. Siempre estoy abierto a nuevas conexiones y desafíos que me permitan seguir creciendo como profesional y como persona.
            </p>}
            {textVisible4 === false && <h4>
                    METAS
                </h4>}
        </div>
    </div>
    )
}
export default AboutMe