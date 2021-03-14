import React from 'react';
import { Link } from 'react-router-dom';
// Assests
import logoHorizontal from '../../assets/logo/logoHorizontal.svg';
// Routes
import { routes } from '../../routes/routes';

export default function Footer() {
  return (
    <footer className='Footer'>
      <Link to={routes.home} className='Footer__link'>
        <img
          src={logoHorizontal}
          alt='logoHorizontal'
          className='Footer__logo'
        />
      </Link>
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
