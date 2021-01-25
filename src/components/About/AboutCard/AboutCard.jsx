import React from 'react';

export default function AboutCard({
  name,
  text,
  social1,
  social2,
  social3,
  icon1,
  icon2,
  icon3,
}) {
  return (
    <div className={`AboutCard`}>
      <div className='AboutCard__profile'>
        <img
          src='https://picsum.photos/100'
          className='AboutCard__profile-img'
        ></img>
        <h2 className='AboutCard__profile-title'>{name}</h2>
      </div>
      <div className='AboutCard__text'>
        <p>{text}</p>
      </div>
      <div className='AboutCard__links'>
        {social1 ? (
          <a
            href={social1}
            className='AboutCard__social'
            target='_blank'
            rel='noreferrer'
          >
            <i className={icon1}></i>
          </a>
        ) : (
          ''
        )}
        {social2 ? (
          <a
            href={social2}
            className='AboutCard__social'
            target='_blank'
            rel='noreferrer'
          >
            <i className={icon2}></i>
          </a>
        ) : (
          ''
        )}
        {social3 ? (
          <a
            href={social3}
            className='AboutCard__social'
            target='_blank'
            rel='noreferrer'
          >
            <i className={icon3}></i>
          </a>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
