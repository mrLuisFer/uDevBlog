import React from 'react';
// Components
import PostComponent from '../PostComponent/PostComponent';

export default function GetPosts({ posts }) {
  console.log(posts);
  return (
    <article className='GetPosts'>
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
    </article>
  );
}
