import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import markdown from './test.md';

export default function Article() {
  console.log(markdown);
  const [article, setArticle] = useState('');

  let { id } = useParams();

  const fetchingArticle = async () => {
    const res = await fetch(`http://localhost:4000/article/${id}`);
    const data = await res.json();

    setArticle(data);
  };

  useEffect(() => {
    fetchingArticle();
  }, []);

  return (
    <>
      {parseInt(id) ? (
        <div className='Article'>
          <div
            dangerouslySetInnerHTML={{ __html: article.article_content }}
          ></div>
        </div>
      ) : (
        <div>
          <p>No existe el articulo :I</p>
          <Link to='/home'>Vayamos devuelta a casa</Link>
        </div>
      )}
    </>
  );
}
