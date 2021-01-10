import React from 'react';
// Components
import NavBar from '../NavBar/NavBar';

export default function Header({handleMenu, menu}) {
  return (
    <div className='Header'>
      <NavBar handleMenu={handleMenu} menu={menu} />
    </div>
  );
}
