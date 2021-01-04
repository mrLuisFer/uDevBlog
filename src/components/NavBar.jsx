import React from 'react';

export default function NavBar({menu, setMenu}) {
  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className='NavBar'>
      <i
        className={menu ? 'fas fa-times' : 'fas fa-hamburger'}
        onClick={handleMenu}
      ></i>
    </div>
  );
}
