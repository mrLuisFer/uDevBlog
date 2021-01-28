import React from 'react';
import { Link } from 'react-router-dom';
// Routes
import { routes } from '../../routes/routes';

export default function HeaderDesktop() {
  return (
    <nav className='HeaderDesktop'>
      <Link to={routes.home} className='HeaderDesktop__link'>
        Home
      </Link>
      <Link to={routes.comunidades} className='HeaderDesktop__link'>
        Comunidades
      </Link>
      <Link to={routes.home} className='HeaderDesktop__link'>
        Descubrir
      </Link>
      <Link to={routes.about} className='HeaderDesktop__link'>
        About
      </Link>
    </nav>
  );
}
