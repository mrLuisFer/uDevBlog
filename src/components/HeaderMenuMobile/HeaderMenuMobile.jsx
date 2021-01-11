import React from 'react';
import {Link} from 'react-router-dom';

// Utils
import {slideInDown} from '../../utils/animateCss';

// Components
import NavBar from '../NavBar/NavBar';

export default function HeaderMenuMobile({handleMenu, menu}) {
  return (
    <div className={slideInDown + ' HeaderMenuMobile'}>
      <NavBar handleMenu={handleMenu} menu={menu} />
      <p className='HeaderMenuMobile__anchor'>
        <Link to='/home' onClick={handleMenu}>
          Home
        </Link>
      </p>
      <p className='HeaderMenuMobile__anchor'>
        <Link to='/home' onClick={handleMenu}>
          Comunidades
        </Link>
      </p>
      <p className='HeaderMenuMobile__anchor'>
        <Link to='/home' onClick={handleMenu}>
          Descubrir
        </Link>
      </p>
      <p className='HeaderMenuMobile__anchor'>
        <Link to='/home' onClick={handleMenu}>
          About
        </Link>
      </p>
    </div>
  );
}
