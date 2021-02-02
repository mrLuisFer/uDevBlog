// import react from 'react'

export default function ApiNewsCard({ title, description, link }) {
  return (
    <div className='ApiNewsCard'>
      <h3 className='ApiNewsCard__title'>{title}</h3>
      <div className='ApiNewsCard__line'></div>
      <p className='ApiNewsCard__content'>
        {description.length > 5
          ? description
          : 'Presiona sobre el boton para ir al articulo original ;D'}
      </p>

      {link.length > 5 ? (
        <button className='ApiNewsCard__btn'>
          <a
            className='ApiNewsCard__btn-link'
            href={link}
            target='_blank'
            rel='noreferrer'
          >
            <i className='fas fa-external-link-alt'></i>Conocer mas!
          </a>
        </button>
      ) : (
        ''
      )}
    </div>
  );
}
