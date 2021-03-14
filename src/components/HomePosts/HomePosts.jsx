import React, { useEffect, useState } from 'react';
// Components
import SideBar from '../SideBar/SideBar';
import YtCard from '../YtCard/YtCard';
import NoPostsFounded from '../NoPostsFounded/NoPostsFounded';

// Utils
import { fadeIn } from '../../utils/animateCss/index';
import GetPosts from '../GetPosts/GetPosts';
import { fetchingPosts } from '../../utils/fetchingPosts/fetchingPosts';

export default function HomePosts() {
  const [posts, setPosts] = useState([]);
  const [findPosts, setFindPosts] = useState(false);

  useEffect(() => {
    fetchingPosts(setPosts);
    if (posts.length > 0) {
      setFindPosts(false);
    } else {
      setFindPosts(false);
    }
  }, []);

  return (
    <>
      <section className={fadeIn + ' HomePosts'}>
        <h1 className='HomePosts__title'>📝Posts</h1>
        <div className='HomePosts__flex'>
          {findPosts ? <NoPostsFounded /> : <GetPosts posts={posts} />}
          {/* El aside se muestra al tamaño 1024px de la pantalla */}
          <aside className='HomePosts__aside'>
            <SideBar />
            <article>
              <YtCard />
            </article>
          </aside>
        </div>
      </section>
    </>
  );
}
