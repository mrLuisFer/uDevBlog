import React from 'react';
import { Link } from 'react-router-dom';

// Assets
import logoHorizontalNoBg from '../../assets/logo/logoHorizontal-noBg.svg';
import logoHorizontal from '../../assets/logo/logoHorizontal.svg';
// Utils
import { fadeIn } from '../../utils/animateCss';
// Components
import HeaderDesktop from '../HeaderDesktop/HeaderDesktop';

export default function NavBar({ menu, handleMenu }) {
  return (
    <div className={fadeIn + ' NavBar'}>
      <Link to='/home' className='NavBar__logo'>
        <img
          src={menu ? logoHorizontal : logoHorizontalNoBg}
          className='NavBar__logo-img'
        />
      </Link>

      {/* Esto detecta el tamaño de la pantalla para renderizar el menu o headerDesktop */}
      <i
        className={
          (menu
            ? 'fas fa-times NavBar__icon-times'
            : 'fas fa-bars NavBar__icon-bars') + ' NavBar__icon'
        }
        onClick={handleMenu}
      ></i>
      {/* Este se muestra cuando la pantalla sea mayor a 900px */}
      <HeaderDesktop />
    </div>
  );
}
