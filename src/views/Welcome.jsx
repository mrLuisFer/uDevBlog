import React from 'react';
import { useHistory, Link } from 'react-router-dom';
// Assets
import welcomeBlogPost from '../assets/welcome-illustration/welcome-blog-post.svg';
// Utils
import { fadeInUp } from '../utils/animateCss';
// Routes
import { routes } from '../routes/routes';

export default function WelcomeView() {
  let history = useHistory();

  const pushToHome = () => {
    history.push('/home');
  };

  return (
    <div className='WelcomeView'>
      <div className='WelcomeView__hero-illustration-div'>
        {/* Hero illustration */}
        <img
          className='WelcomeView__hero-illustration-div-img'
          src={welcomeBlogPost}
          alt='welcome-blog-spot'
        />
      </div>
      <div className={fadeInUp + ' WelcomeView__container'}>
        <h1 className='WelcomeView__title'>
          Bienvenid@ a <span>uDevBlog!</span>
        </h1>
        {/* Optional Line */}
        <p className={fadeInUp + ' WelcomeView__text'}>
          Un blog en donde aprenderas sobre tecnologias de programacion para
          <span> Frontend</span> y <span>Backend</span> y donde encontraras a
          <span> comunidades</span>, programadores, contenido para aprender y
          resolver tus dudas de manera sencilla
        </p>
      </div>
      <div className='WelcomeView__div__link-btn'>
        <div className='WelcomeView__btn-div'>
          <button
            className={fadeInUp + '  WelcomeView__btn-div__btn'}
            onClick={pushToHome}
          >
            Conozcamos a mas <br /> comunidades!
          </button>
        </div>
        <div className={fadeInUp + ' WelcomeView__links-div'}>
          <a
            className='WelcomeView__links-div__link'
            href='https://github.com/mrLuisFer/uDevBlog'
            target='_blank'
            rel='noreferrer'
          >
            Repositorio
          </a>
          <Link
            className='WelcomeView__links-div__link'
            to={routes.comunidades}
          >
            Conocer Mas
          </Link>
          <Link className='WelcomeView__links-div__link' to={routes.about}>
            Integrantes
          </Link>
        </div>
      </div>
    </div>
  );
}
