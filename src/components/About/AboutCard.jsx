import React from 'react'

// Utils
import {fadeIn} from '../../utils/animateCss/index';

    export default function AboutCard(){
    return (
        <div className={fadeIn + 'AboutCard'}>
            <div className="AboutCard__container">
                <div className="AboutCard__image">
                <img src='https://picsum.photos/100' className="AboutCard__image-img"></img>
                </div>
                <div className="AboutCard__text">
                    <h3 className="AboutCard__text-title">Nombre</h3>
                    <p>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.</p>
                </div>
                <div className="redes-sociales">
                <a href="#">IG</a>
                <a href="#">IG</a>
                <a href="#">IG</a>
                </div>
            </div>
        </div>
    )
}


