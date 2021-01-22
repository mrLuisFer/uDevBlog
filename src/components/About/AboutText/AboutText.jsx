import React from 'react';

// Utils
import { fadeIn, slideInUp } from '../../../utils/animateCss/index';

//Components
import AboutCard from '../AboutCard/AboutCard';

// AboutInfo
import { luis, catalina, michael } from './aboutInfo';

export default function AboutText() {
  return (
    <section className={fadeIn + 'AboutText'}>
      <h1 className='AboutText__title'>
        <i className='fas fa-align-left'></i>About
      </h1>
      <p className={`AboutText__text ${slideInUp}`}>
        Es un hecho establecido hace demasiado tiempo que un lector se distraerá
        con el contenido del texto de un sitio mientras que mira su diseño. El
        punto de usar Lorem Ipsum es que tiene una distribución más o menos
        normal de las letras, al contrario de usar textos como por ejemplo
        Contenido aquí, contenido aquí. Estos textos hacen parecerlo un español
        que se puede leer. Muchos paquetes de autoedición y editores de páginas
        web usan el Lorem Ipsum como su texto por defecto, y al hacer una
        búsqueda de Lorem Ipsum va a dar por resultado muchos sitios web que
        usan este texto si se encuentran en estado de desarrollo. Muchas
        versiones han evolucionado a través de los años, algunas veces por
        accidente, otras veces a propósito por ejemplo insertándole humor y
        cosas por el estilo.
      </p>

      <div className='AboutText__cards-container'>
        <h1 className='AboutText__cards-container-title'>
          <i className='fas fa-user-friends'></i>Contributors
        </h1>
        <div className='AboutText__cards-container-flex'>
          <AboutCard {...luis} />
          <AboutCard {...catalina} />
          <AboutCard {...michael} />
        </div>
      </div>
    </section>
  );
}
