import React from 'react';
// Components
import NavBar from '../NavBar/NavBar';

export default function Header({handleMenu, menu}) {
  return (
    <nav className='Header' id='header'>
      <NavBar handleMenu={handleMenu} menu={menu} />
    </nav>
  );
}
