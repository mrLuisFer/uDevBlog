import React from 'react';
// Assets
import noPostsIllustration from '../../assets/no-posts/no-posts-ill.svg';

export default function NoPostsFounded() {
  return (
    <div className='NoPostsFounded'>
      <p>No posts founded</p>
      <img src={noPostsIllustration} alt='no-posts-founded' />
    </div>
  );
}
