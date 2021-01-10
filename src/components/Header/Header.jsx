import React, {useState} from 'react';
import {Link} from 'react-router-dom';
// Components
import NavBar from '../NavBar/NavBar';
import HeaderMenuMobile from '../HeaderMenuMobile/HeaderMenuMobile';
// Assets
import logoHorizontalNoBg from '../../assets/logo/logoHorizontal-noBg.svg';

export default function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className='Header'>
        <Link to='/home'>
          <img src={logoHorizontalNoBg} />
        </Link>
        <NavBar setMenu={setMenu} menu={menu} />
      </div>
      {menu ? <HeaderMenuMobile /> : ''}
    </>
  );
}
