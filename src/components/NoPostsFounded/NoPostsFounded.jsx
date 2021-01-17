import React from 'react';
// Assets
import noPostsIllustration from '../../assets/no-posts/no-posts-ill.svg';

export default function NoPostsFounded() {
  return (
    <div className='NoPostsFounded'>
      <div>
        <h2 className='NoPostsFounded__title'>Oops!</h2>
        <p className='NoPostsFounded__text'>
          No hay resultados.. {':('} <br />
          <span className='NoPostsFounded__text-span'>
            Pero puedes buscar en estos lugares {':D'}
          </span>
        </p>
        <div className='NoPostsFounded__container'>
          <button>Comunidades</button>
          <button>Descubrir</button>
        </div>
      </div>
      <img
        className='NoPostsFounded__img'
        src={noPostsIllustration}
        alt='no-posts-founded'
      />
    </div>
  );
}
