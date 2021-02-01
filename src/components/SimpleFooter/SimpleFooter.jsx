// import react from 'react'
import { Link } from 'react-router-dom';
import { routes } from '../../routes/routes';

export default function SimpleFooter() {
  return (
    <div className='SimpleFooter'>
      <div className='SimpleFooter__container'>
        <div className='SimpleFooter__textContainer'>
          <p>Ojala que te haya gustado el articulo :D</p>
        </div>
        <div className='SimpleFooter__linksContainer'>
          <p>
            Puedes seguir leyendo y aprendiendo con mas articulos:{' '}
            <span className='SimpleFooter__linksContainer-line'></span>
          </p>
          <div>
            <Link to={routes.home}>Home</Link>
            <Link to={routes.comunidades}>Comunidades</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
