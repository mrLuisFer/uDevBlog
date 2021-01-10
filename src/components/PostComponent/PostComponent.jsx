import React from 'react';

// Assets
import {fadeInUpBig} from '../../utils/animateCss/index';

export default function PostComponent({
  imgUrl,
  title,
  description,
  categories,
}) {
  // @todo: hacer mas dinamica la funcion
  const truncate = (str, length = '100') => {
    if (str.length >= length) {
      return str.length > 10 ? str.substring(0, length) + '...' : str;
    } else {
      return str + '.';
    }
  };

  return (
    <div className={fadeInUpBig + ' PostComponent'}>
      <img src={imgUrl} alt={title} className='PostComponent__img' />
      <div className='PostComponent__content'>
        <h3 className='PostComponent__content-title'>{title}</h3>
        <p className='PostComponent__content-description'>
          {truncate(description)}
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
