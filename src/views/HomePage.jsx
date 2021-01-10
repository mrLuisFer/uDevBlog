import React, {useState} from 'react';

// Components
import Header from '../components/Header/Header';
import HeaderMenuMobile from '../components/HeaderMenuMobile/HeaderMenuMobile';
import HomePosts from '../components/HomePosts/HomePosts';

export default function HomePage() {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className='HomePage'>
      {menu ? (
        <HeaderMenuMobile handleMenu={handleMenu} menu={menu} />
      ) : (
        <>
          <Header menu={menu} handleMenu={handleMenu} />
          <HomePosts />
        </>
      )}
    </div>
  );
}
