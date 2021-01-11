import React from 'react';
// Assests
import logoHorizontal from '../../assets/logo/logoHorizontal.svg';

export default function Footer() {
  return (
    <footer className='Footer'>
      <img src={logoHorizontal} alt='logoHorizontal' className='Footer__logo' />
      <div className='Footer__content'>
        <p className='Footer__content-text'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
          repellat consequuntur molestiae laborum. Minus doloremque porro minima
          necessitatibus reiciendis voluptates voluptatum, tempore eligendi hic
          iste eos repellat veritatis doloribus. Reprehenderit.
        </p>
      </div>
    </footer>
  );
}
