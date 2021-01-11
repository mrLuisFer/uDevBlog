import React from 'react';
import {Link} from 'react-router-dom';

// Assets
import logoHorizontalNoBg from '../../assets/logo/logoHorizontal-noBg.svg';
import logoHorizontal from '../../assets/logo/logoHorizontal.svg';
// Utils
import {fadeIn} from '../../utils/animateCss';
import {useWindow} from '../../hooks/useWindow/useWindow';
// Components
import HeaderDesktop from '../HeaderDesktop/HeaderDesktop';

export default function NavBar({menu, handleMenu}) {
  const windowSize = useWindow();

  return (
    <div className={fadeIn + ' NavBar'}>
      <Link to='/home' className='NavBar__logo'>
        <img
          src={menu ? logoHorizontal : logoHorizontalNoBg}
          className='NavBar__logo-img'
        />
      </Link>

      {/* Esto detecta el tamaño de la pantalla para renderizar el menu o headerDesktop */}
      {windowSize <= 900 ? (
        <i
          className={
            (menu
              ? 'fas fa-times NavBar__icon-times'
              : 'fas fa-bars NavBar__icon-bars') + ' NavBar__icon'
          }
          onClick={handleMenu}
        ></i>
      ) : (
        <HeaderDesktop />
      )}
    </div>
  );
}
