import React from 'react';
// Utils
import {fadeInRightBig} from '../utils/animateCss';

export default function HeaderMenuMobile() {
  return (
    <div className={fadeInRightBig + ' HeaderMenuMobile'}>
      <p>Home</p>
      <p>Descubrir</p>
      <p>Vacantes</p>
      <p>About</p>
    </div>
  );
}
