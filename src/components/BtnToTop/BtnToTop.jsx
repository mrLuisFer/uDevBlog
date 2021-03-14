import React from 'react';

export default function BtnToTop() {
  const scrollToTop = () => {
    // esto hace que al dar click te envie al top del window
    window.scrollTo(0, 0);
  };

  return (
    <span className='BtnToTop' onClick={scrollToTop}>
      <i className='fas fa-arrow-up BtnToTop__icon'></i>
    </span>
  );
}
