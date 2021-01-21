import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderDesktop() {
  return (
    <div className='HeaderDesktop'>
      <Link to='/home' className='HeaderDesktop__link'>
        Home
      </Link>
      <Link to='/home' className='HeaderDesktop__link'>
        Comunidades
      </Link>
      <Link to='/home' className='HeaderDesktop__link'>
        Descubrir
      </Link>
      <Link to='/About' className='HeaderDesktop__link'>
        About
      </Link>
    </div>
  );
}
