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
      <p className='HeaderMenuMobile__anchor'>
        <a href='/home'>Home</a>
      </p>
      <p className='HeaderMenuMobile__anchor'>
        <a href='/home'>Descubrir</a>
      </p>
      <p className='HeaderMenuMobile__anchor'>
        <a href='/home'>Vacantes</a>
      </p>
      <p className='HeaderMenuMobile__anchor'>
        <a href='/home'>About</a>
      </p>
    </div>
  );
}
