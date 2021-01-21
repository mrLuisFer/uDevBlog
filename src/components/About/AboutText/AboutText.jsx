import React from 'react';

// Utils
import { fadeIn } from '../../../utils/animateCss/index';

//Components
import AboutCard from '../AboutCard/AboutCard';

export default function AboutText() {
  return (
    <>
      <div className={fadeIn + 'AboutText'}>
        <h1 className='AboutText__title'>About</h1>
        <p className='AboutText__text'>
          Es un hecho establecido hace demasiado tiempo que un lector se
          distraerá con el contenido del texto de un sitio mientras que mira su
          diseño. El punto de usar Lorem Ipsum es que tiene una distribución más
          o menos normal de las letras, al contrario de usar textos como por
          ejemplo Contenido aquí, contenido aquí. Estos textos hacen parecerlo
          un español que se puede leer. Muchos paquetes de autoedición y
          editores de páginas web usan el Lorem Ipsum como su texto por defecto,
          y al hacer una búsqueda de Lorem Ipsum va a dar por resultado muchos
          sitios web que usan este texto si se encuentran en estado de
          desarrollo. Muchas versiones han evolucionado a través de los años,
          algunas veces por accidente, otras veces a propósito por ejemplo
          insertándole humor y cosas por el estilo.
        </p>

        <div className='AboutText__cards-container'>
          <h1 className='AboutText__cards-container-title'>
            <i className='fas fa-user-friends'></i>Contributors
          </h1>
          <div className='AboutText__cards-container-flex'>
            <AboutCard
              name='Luis Alvarez'
              text='texto de Luis'
              social1='https://www.linkedin.com/in/mrLuisFer'
              icon1='fab fa-linkedin-in'
              social2='https://github.com/mrLuisFer'
              icon2='fab fa-github'
              social3='https://twitter.com/lolesuncrak'
              icon3='fab fa-twitter'
            />
            <AboutCard
              name='Catalina Villarreal'
              text='texto de catalina'
              social1='https://www.linkedin.com/in/vcatalina/'
              icon1='fab fa-linkedin-in'
              social2='https://github.com/LCV13'
              icon2='fab fa-github'
            />
            <AboutCard
              name='Michael Hernández'
              text='texto de Michael'
              social1='www.linkedin.com/in/michael-hernandez-sanchez-6ba0b0162'
              icon1='fab fa-linkedin-in'
              social2='https://github.com/elmichaelv'
              icon2='fab fa-github'
              social3='https://www.instagram.com/michaeldelmedio/'
              icon3='fab fa-instagram'
            />
          </div>
        </div>
      </div>
    </>
  );
}
