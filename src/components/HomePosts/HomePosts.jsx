import React from 'react';
// Components
import PostComponent from '../PostComponent/PostComponent';

// Ejemplo de como manejaremos los post con una api o con jsons
import homePosts from '../../posts/homePosts.json';

export default function HomePosts() {
  console.log(homePosts);

  return (
    <div className='HomePosts'>
      <h1 className='HomePosts__title'>Posts</h1>
      <PostComponent />
    </div>
  );
}
