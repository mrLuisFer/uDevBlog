import React, { useState } from 'react';

export default function ApiNewsDetail() {
  const [showDetail, setShowDetail] = useState(false);

  const handleShowDetail = () => {
    setShowDetail(!showDetail);
  };

  return (
    <>
      <div
        className='ApiNewsDetail__detailContainer'
        onClick={handleShowDetail}
      >
        <h3 className='ApiNewsDetail__detailContainer-title'>
          <i className='fas fa-caret-right' id={showDetail ? 'rotate' : ''}></i>
          More details
        </h3>
        {showDetail ? (
          <p className='ApiNewsDetail__detailContainer-text'>
            Esta es una api que podiamos utilizar para mostrar noticias acerca
            del mundo de la programacion o cualquier tema :D
            <span>
              <i className='fas fa-rocket'></i>Powered by RapidApi
            </span>
          </p>
        ) : (
          ''
        )}
      </div>
    </>
  );
}
