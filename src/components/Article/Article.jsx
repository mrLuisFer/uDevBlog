import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
// Routes
import { routes } from '../../routes/routes';
// import markdown from './test.md';

export default function Article() {
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
          <Link to={routes.home}>Vayamos devuelta a casa</Link>
        </div>
      )}
    </>
  );
}
