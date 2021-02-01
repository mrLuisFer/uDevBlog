import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
// Routes
import { routes } from '../../routes/routes';
// Components 
import SimpleFooter from '../SimpleFooter/SimpleFooter.jsx'

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
        <section className='Article'>
          <div className='Article__container'>
            <Link to={routes.home}>
              <i className='fas fa-arrow-left'></i>
              Volver
            </Link>
            <div className='Article__container__line'></div>
            <h1 className='Article__title'>{article.title}</h1>
            <article
              className='Article__container__content'
              dangerouslySetInnerHTML={{ __html: article.article_content }}
            ></article>
          </div>
        </section>
      ) : (
        <div>
          <p>No existe el articulo :I</p>
          <Link to={routes.home}>Vayamos devuelta a casa</Link>
        </div>
      )}
    <SimpleFooter />
    </>
  );
}
