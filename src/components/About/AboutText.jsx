import React from 'react'

// Utils
import {fadeIn} from '../../utils/animateCss/index';

//Components
import AboutCard from './AboutCard'

export default function AboutText() {
    return (
        <>
            <div className={fadeIn + 'AboutText'}>
                <h1>About</h1>
                <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo Contenido aquí, contenido aquí. Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de Lorem Ipsum va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito por ejemplo insertándole humor y cosas por el estilo.</p>
                <AboutCard name="Luis Alvarez" linkedin="https://www.linkedin.com/in/mrLuisFer" github="https://github.com/mrLuisFer" twitter="https://twitter.com/lolesuncrak"/>
                <AboutCard name="Catalina Villarreal" linkedin="https://www.linkedin.com/in/vcatalina/" github=""/>
                <AboutCard name="Michael Hernández" instagram="https://www.instagram.com/michaeldelmedio/" linkedin="www.linkedin.com/in/michael-hernandez-sanchez-6ba0b0162" github="https://github.com/elmichaelv"/>
            </div>
        </>
    )
}

