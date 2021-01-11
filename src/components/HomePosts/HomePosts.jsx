import React from 'react';
// Components
import PostComponent from '../PostComponent/PostComponent';
import BtnToTop from '../BtnToTop/BtnToTop';
import SideBar from '../SideBar/SideBar';
import YtCard from '../YtCard/YtCard';

// Utils
import {fadeIn} from '../../utils/animateCss/index';
// Hooks
import {useWindow} from '../../hooks/useWindow/useWindow';

// Ejemplo de como manejaremos los post con una api o con jsons
import homePosts from '../../posts/homePosts.json';

export default function HomePosts() {
  const windowSize = useWindow();

  return (
    <>
      <div className={fadeIn + ' HomePosts'}>
        <h1 className='HomePosts__title'>📝Posts</h1>
        <div className='HomePosts__flex'>
          <div className='HomePosts__content'>
            {homePosts.map(({title, description, id, categories, img}) => (
              <PostComponent
                key={id}
                imgUrl={img}
                title={title}
                description={description}
                categories={categories}
              />
            ))}
          </div>
          {windowSize >= 1024 ? (
            <aside className='HomePosts__aside'>
              <SideBar />
              <div>
                <YtCard />
              </div>
            </aside>
          ) : (
            ''
          )}
        </div>
      </div>
      <BtnToTop />
    </>
  );
}
