// Estas son las animaciones que exportamos del archivo animate.css para un mejor manejo de clases
// y hacerlas mas reutilizables
// Solo debes poner el `animate__animated` y el nombre de la animacion

// esto debe ser agregado siempre para tener animado el elemento
const animated = 'animate__animated';

// velocidades de la animacion
const fast = 'animate__fast';
const faster = 'animate__faster';

// estas son las animaciones que debes usar importandolas y usando el nombre de la variable
const fadeIn = `${animated} animate__fadeIn `;
const fadeInUp = `${animated} animate__fadeInUp ${faster}`;
const fadeInUpBig = `${animated} animate__fadeInUpBig ${faster}`;
const fadeInRightBig = `${animated} animate__fadeInRightBig ${faster}`;
const fadeInDownBig = `${animated} animate__fadeInDownBig ${faster}`;
const slideInDown = `${animated} animate__slideInDown ${faster}`;
const slideInUp = `${animated} animate__slideInUp ${fast}`;

/* Aqui solo añade el nombre de la animacion para exportarla 
y poder usarla en diferentes archivos */
export {
  fadeIn,
  fadeInUp,
  fadeInUpBig,
  fadeInRightBig,
  fadeInDownBig,
  slideInDown,
  slideInUp,
};
