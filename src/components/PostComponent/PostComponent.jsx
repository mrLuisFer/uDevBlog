import React from 'react';
import {useHistory} from 'react-router-dom';
// Assets
import {fadeInUpBig} from '../../utils/animateCss/index';
// Utils
import {truncate} from '../../utils/truncateFunction/truncateFunction';

export default function PostComponent({
  imgUrl,
  title,
  description,
  categories,
  id,
}) {
  // aqui calcula el ancho de la pantalla par poder recortar mas o menos texto
  let length;
  const windowWidth = window.innerWidth;
  if (windowWidth >= 700) {
    length = '121';
  } else if (windowWidth >= 1024) {
    length = '311';
  } else {
    length = '91';
  }

  let history = useHistory();
  const handleOpenArticle = () => {
    history.push(`/article/${id}`);

    console.log(history.location);
  };

  return (
    <div className={fadeInUpBig + ' PostComponent'} onClick={handleOpenArticle}>
      <img src={imgUrl} alt={title} className='PostComponent__img' />
      <div className='PostComponent__content'>
        <h3 className='PostComponent__content-title'>{title}</h3>
        <p className='PostComponent__content-description'>
          {truncate(description, length)}
        </p>
        <div className='PostComponent__categories'>
          {categories?.map((category) => (
            <span key={category} className='PostComponent__categories-category'>
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
