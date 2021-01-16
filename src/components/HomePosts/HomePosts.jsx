import React, { useEffect, useState } from 'react';
// Components
import PostComponent from '../PostComponent/PostComponent';
import BtnToTop from '../BtnToTop/BtnToTop';
import SideBar from '../SideBar/SideBar';
import YtCard from '../YtCard/YtCard';

// Utils
import { fadeIn } from '../../utils/animateCss/index';
import { fetchingPosts } from '../../utils/fetchingPosts/fetchingPosts';

export default function HomePosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchingPosts(setPosts);
  }, []);

  console.log(posts);

  return (
    <>
      <div className={fadeIn + ' HomePosts'}>
        <h1 className='HomePosts__title'>📝Posts</h1>
        <div className='HomePosts__flex'>
          <div className='HomePosts__content'>
            {posts?.map((post) => (
              <PostComponent
                key={post._id}
                imgUrl={post.img}
                title={post.title}
                description={post.description}
                categories={post.categories}
                id={post._id}
              />
            ))}
          </div>
          {/* El aside se muestra al tamaño 1024px de la pantalla */}
          <aside className='HomePosts__aside'>
            <SideBar />
            <div>
              <YtCard />
            </div>
          </aside>
        </div>
      </div>
      <BtnToTop />
    </>
  );
}
