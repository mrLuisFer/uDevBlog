import React from 'react';
// import {Link} from 'react-router-dom';

// Utils
import {slideInDown} from '../../utils/animateCss';

// Components
import NavBar from '../NavBar/NavBar';

export default function HeaderMenuMobile({handleMenu, menu}) {
  return (
    <div className={slideInDown + ' HeaderMenuMobile'}>
      <NavBar handleMenu={handleMenu} menu={menu} />
      <a href='/home' className='HeaderMenuMobile__anchor'>
        Home
      </a>
      <a href='/home' className='HeaderMenuMobile__anchor'>
        Descubrir
      </a>
      <a href='/home' className='HeaderMenuMobile__anchor'>
        Vacantes
      </a>
      <a href='/home' className='HeaderMenuMobile__anchor'>
        About
      </a>
    </div>
  );
}
