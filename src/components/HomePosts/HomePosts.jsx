import React from 'react';
// Components
import PostComponent from '../PostComponent/PostComponent';
import BtnToTop from '../BtnToTop/BtnToTop';

// Utils
import {fadeIn} from '../../utils/animateCss/index';

// Ejemplo de como manejaremos los post con una api o con jsons
import homePosts from '../../posts/homePosts.json';

export default function HomePosts() {
  console.log(homePosts);

  return (
    <>
      <div className={fadeIn + ' HomePosts'}>
        <h1 className='HomePosts__title'>📝Posts</h1>
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
      </div>
      <BtnToTop />
    </>
  );
}
