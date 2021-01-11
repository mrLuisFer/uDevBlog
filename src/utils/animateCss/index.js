// Estas son las animaciones que exportamos del archivo animate.css para un mejor manejo de clases
// y hacerlas mas reutilizables
// Solo debes poner el `animate__animated` y el nombre de la animacion

// esto debe ser agregado siempre para tener animado el elemento
const animated = 'animate__animated';

// velocidades de la animacion
const fast = 'animate__fast';
const faster = 'animate__faster';

// estas son las animaciones que debes usar importandolas y usando el nombre de la variable
export const fadeIn = `${animated} animate__fadeIn `;
export const fadeInUp = `${animated} animate__fadeInUp ${fast}`;
export const fadeInUpBig = `${animated} animate__fadeInUpBig ${faster}`;
export const fadeInRightBig = `${animated} animate__fadeInRightBig ${faster}`;
export const fadeInDownBig = `${animated} animate__fadeInDownBig ${faster}`;
export const slideInDown = `${animated} animate__slideInDown ${faster}`;
