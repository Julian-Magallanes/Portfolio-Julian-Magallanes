import React from "react";
import style from "./AboutMe.module.css"
import imageMontaint from "../../assets/mountain.png"
import imageAvion from "../../assets/avion2.png"
import imageMetas from "../../assets/metas.png"
const AboutMe = () => {
    return(
    <div className={style.aboutMeContainer}>
        <div className={style.aboutMeSection1}>
            <img src={imageMontaint} alt="imageMontaint" />
            <p>
                ¡Hola! Soy un apasionado de la programación con sede en <strong>Mendoza, Argentina, tierra del Aconcagua.</strong> Mi viaje comenzó en el mundo de la arquitectura, donde desarrollé una sólida base de habilidades creativas y analíticas. Sin embargo, mi verdadera pasión siempre ha sido la programación.
            </p>
        </div>
        <div className={style.aboutMeSection2}>
            <div className={style.grid1}>
                <p>
                    A lo largo de mi carrera como arquitecto, he dedicado tiempo y esfuerzo a estudiar y practicar programación de forma autodidacta.<strong> En el 2023 decidí que esto dejaría de ser un hobby y comenzaría a ser mi vida.</strong>
                </p>
            </div>
            <div className={style.grid2}>
                <img src={imageAvion} alt="imageAvion" />
                <p>Además de mi dedicación a la programación, soy un ávido viajero. Explorar nuevos lugares y culturas amplía mi perspectiva y alimenta mi creatividad. <strong>Sueño con poder combinar mi pasión por la programación con mi amor por los viajes</strong>, trabajando de forma remota mientras descubro nuevos destinos y experiencias en todo el mundo.
                </p>
            </div>
        </div>
        <div className={style.aboutMeSection3}>
            <img src={imageMetas} alt="imageMetas" />
            <p>
            Estoy emocionado por seguir <strong>mi viaje en el mundo de la programación</strong>, buscando oportunidades para contribuir a proyectos significativos y colaborar con personas talentosas de todo el mundo. Siempre estoy abierto a nuevas conexiones y desafíos que me permitan seguir creciendo como profesional y como persona.
            </p>
        </div>
    </div>
    )
}
export default AboutMe